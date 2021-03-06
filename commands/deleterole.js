const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports = {
    help: {
        name: "deleterole",
        description: "Deletes a role",
        usage: ".deleterole <name>",
        command: ".deleterole",
        aliases: ["dr"],
        aliasname: ".dr",

    },

run: async (bot, message, args) => {
    let rolename;

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Delete Role")
        .setColor("#FF0000")
        .addField("Command: ",module.exports.help.command )
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
        let roleEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("__Deleted Role__ ",rolename)
        .addField("__Deleted By__", message.author)
        .setTimestamp();
        
        message.guild.roles.find(r => r.name === rolename).delete()
        message.channel.send(roleEmbed);    
        }

      
    
    
}
}