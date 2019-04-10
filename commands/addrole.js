const Discord = require("discord.js");
const errors = require("../utils/errors.js");
const moment = require("moment");
module.exports = {
    help: {
        name: "addrole",
        usage: "!addrole <user> <role> ",
        description: "Adds a role to a user",
        command: "!addrole",
        aliases: ["ar"],
    },

run: async (bot, message, args) => {

   
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Add Role")
        .setColor("#FF0000")
        .addField("Command: ","!addrole" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases",,module.exports.help.aliases)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
  
    
    let raUser = message.mentions.members.first();
    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
    if(!raUser) return message.channel.send("Can't find user!");    
    let role = args.slice(1).join(" ");  
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(r => r.name === role);
    if(!gRole) return message.reply("Couldn't find that role.");
    const member = message.guild.member(raUser);
    if(raUser.roles.has(gRole.id)) return message.reply("They already have that role.");
    await(raUser.addRole(gRole.id));
    let roleEmbed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Added Role", gRole)
    .addField("To User", raUser)
    .addField("Roles: ", member.roles.filter(r => r.name !== "@everyone").map(roles => `${roles.name}`).join(", "));
    return message.channel.send(roleEmbed);
   // message.channel.send(`${raUser} has been given the role ${gRole.name}`);

    
    
}
}


