const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "removerole",
        description: "Removes a role from a user",
        usage: "!removerole <user> <role>"
    },

run: async (bot, message, args) => {
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Remove Role")
        .setColor("#FF0000")
        .addField("Command: ","!removerole" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    let rrUser = message.mentions.members.first();
    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if(!rrUser) return message.channel.send("Can't find user!");    
    let role = args.slice(1).join(" ");   
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(r => r.name === role);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(!rrUser.roles.has(gRole.id)) return message.reply("They don't have that role.");
    await(rrUser.removeRole(gRole.id));


        message.channel.send(`${rrUser} the role ${gRole.name} has been removed from you`);
   
}
}
