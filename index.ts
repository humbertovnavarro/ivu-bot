import { Client, IntentsBitField, InteractionType } from "discord.js";
import z from "zod";
import { isIVUDay } from "./lib/time";
import { GuildSlashCommandRepository, type SlashCommandHandler } from "./lib/slash-commands";
import { bulkAddAttendeeRole } from "./lib/slash-commands/bulk-add-attendee";

const envSchema = z.object({
    DISCORD_TOKEN: z.string(),
    HOME_GUILD: z.string(),
    ATTENDEE_ROLE: z.string(),
    CLIENT_ID: z.string()
});

// Will throw an error on invalid config
const { DISCORD_TOKEN, HOME_GUILD, ATTENDEE_ROLE, CLIENT_ID } = envSchema.parse(process.env);

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildPresences,
        // Permissions needed for planned features
        // IntentsBitField.Flags.AutoModerationConfiguration,
        // IntentsBitField.Flags.MessageContent,
        // IntentsBitField.Flags.GuildScheduledEvents
        // IntentsBitField.Flags.AutoModerationExecution
    ]
});

const commandRepository = new GuildSlashCommandRepository(CLIENT_ID, HOME_GUILD, DISCORD_TOKEN, [
    bulkAddAttendeeRole(ATTENDEE_ROLE, HOME_GUILD)
]);

const commandHandlers = new Map<string, SlashCommandHandler>();
commandRepository.commands.forEach(command => {
    commandHandlers.set(command.body.name, command.handler);
});

client.on("interactionCreate", async interaction => {
    if(!interaction.inGuild()) return;
    if(HOME_GUILD != interaction.guildId) {
        interaction.guild?.leave();
        console.error(`Interaction received from unknown guild \n${interaction.guild?.toJSON()}`);
        process.exit(1);
    }
    switch(interaction.type) {
        case InteractionType.ApplicationCommand:
            const name = interaction.command?.name;
            if(name !== undefined) {
                const handler = commandHandlers.get(name);
                await Promise.resolve(
                    handler?.(interaction)
                ).catch(console.error);
            }
            break;
    }
});

client.on("guildMemberAdd", async (member) => {
    if(member.guild.id !== HOME_GUILD) return;
    if(member.joinedAt && isIVUDay(member.joinedAt)) {
        if(!member.roles.cache.has(ATTENDEE_ROLE))
        await member.roles.add(ATTENDEE_ROLE).catch(console.error);
    }
});

client.on("ready", async () => {
    await commandRepository.upload().catch(console.error);
});

client.login(DISCORD_TOKEN);