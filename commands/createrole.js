const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports = {
    help: {
        name: "createrole",
        description: "Creates a role",
        usage: "!createrole <name> <color>",
        command: "!createrole",
        aliases: ["cr"],
        aliasname: "!cr",

    },

run: async (bot, message, args) => {
    let rolename;
    let rolecolor = args[1];
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Create Role")
        .setColor("#FF0000")
        .addField("Command: ","!createrole" )
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
        else if (!args[1]){
            let rolecolorEmbed = new Discord.RichEmbed()
            .setTitle("Enter a valid color!")
            .setColor("#FF0000")
            .addField("Colors","DEFAULT, AQUA, GREEN, BLUE, PURPLE, LUMINOUS_VIVID_PINK, GOLD, ORANGE, RED, GREY, DARKER_GREY, NAVY, DARK_AQUA, DARK_GREEN, DARK_BLUE, DARK_PURPLE, DARK_VIVID_PINK, DARK_GOLD, DARK_ORANGE, DARK_RED, DARK_GREY, LIGHT_GREY, DARK_NAVY" )
            .setFooter("Additionally you can use a hex value.");            
            message.channel.send(rolecolorEmbed);
        }
        
        else{
        let roleEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("__New Role Name__ ",rolename)
        .addField("Role Color",rolecolor)
        .addField("__Created By__", message.author)
        .setTimestamp();
        
        message.guild.createRole({
            name: rolename,
            color: rolecolor,
        });
        message.channel.send(roleEmbed);    
        }

      
    
    
}
}