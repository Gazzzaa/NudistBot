const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "removerole"
    },

run: async (bot, message, args) => {

    let rrUser = message.mentions.members.first();
    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if(!rrUser) return message.channel.send("Can't find user!");    
    let role = args.join(" ").slice(22);   
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(!rrUser.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rrUser.removeRole(gRole.id));


        message.channel.send(`${rrUser} the role ${gRole.name} has been removed from you`);
   
}
}