import { REST, Routes } from "discord.js";
import type { CommandInteraction, RESTPostAPIApplicationCommandsJSONBody } from "discord.js";
export type SlashCommandHandler = (interaction: CommandInteraction) => unknown;
export interface SlashCommand {
    // You can use the toJSON method of the { SlashCommandBuilder } from discord js here.
    body: RESTPostAPIApplicationCommandsJSONBody,
    handler: SlashCommandHandler
}

export class GuildSlashCommandRepository {
    rest: REST;
    clientId: string;
    guildId: string;
    commands: SlashCommand[];
    constructor(clientId: string, guildId: string, token: string, commands: SlashCommand[]) {
        this.commands = commands;
        this.rest = new REST().setToken(token);
        this.clientId = clientId;
        this.guildId = guildId;
    }
    async upload() {
		const data = await this.rest.put(
			Routes.applicationGuildCommands(this.clientId, this.guildId),
			{ body: this.commands.map(command => command.body) },
		);
    }
}