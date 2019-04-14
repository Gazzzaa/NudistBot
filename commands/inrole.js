const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports = {
    help: {
        name: "inrole",
        description: "Shows members in role",
        usage: "!inrole <role>",
        command: "!inrole",
        aliases: ["ir"],
        aliasname: "!ir",

    },

run: async (bot, message, args) => {
    let rolename;

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("In Role")
        .setColor("#FF0000")
        .addField("Command: ","!inrole" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }else rolename = args[0]
        if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
        if(!rolename){
        message.reply("Enter a role name!");
        }
        
        else{
        let members = message.mentions.members.first();
        let rc = message.guild.roles.find(rc => rc.name === rolename)
        let roleEmbed = new Discord.RichEmbed()
        .addField("__Role__",`${rc}`)
        .addField("__Members in this role__",message.guild.roles.get(rc).members.map(m=>m.user.tag).join(" \n "))
        .setTimestamp();
        message.channel.send(roleEmbed);

        
        }

      
    
    
}
}