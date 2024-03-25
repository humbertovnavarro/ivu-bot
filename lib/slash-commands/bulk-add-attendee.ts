import { type CommandInteraction, type CacheType, SlashCommandBuilder, PermissionFlagsBits } from "discord.js";
import type { SlashCommand } from ".";
import { isIVUDay } from "../time";


export const bulkAddAttendeeRole = (attendeeRoleId: string, guildId: string): SlashCommand => {
    return {
        body: new SlashCommandBuilder()
        .setName("bulk-add-attendees")
        .setDescription("goes through the member list and automatically adds the attendee role if they joined on ivu day")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles).toJSON(),
        handler: async function (interaction: CommandInteraction<CacheType>): Promise<void> {
            await interaction.guild?.members.fetch().catch(error => {
                console.error(error);
                interaction.reply({
                    ephemeral: true,
                    content: "error fetching members list"
                });
            })
            const errors: Error[] = [];
            const members = interaction.guild?.members.cache.forEach(member => {
                const needsAttendeeRole = member.joinedAt && isIVUDay(member.joinedAt) && !member.roles.cache.has(attendeeRoleId)
                if(needsAttendeeRole) {
                    member.roles.add(attendeeRoleId).catch(error => {
                        errors.push(error)
                        console.error(error);
                    });
                }
            });
            if(errors.length > 10) {
                interaction.reply({
                    ephemeral: true,
                    content: "Failed to add role to " + errors.length + "members. Check console for more info."
                }).catch(console.error);
            } else {
                interaction.reply({
                    ephemeral: true,
                    content: errors.map(error => `${error}`).join("\n")
                }).catch(console.error);
            }

        }
    }
}