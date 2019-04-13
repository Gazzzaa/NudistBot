const Discord = require("discord.js");


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
        .setTitle("CReate Role")
        .setColor("#FF0000")
        .addField("Command: ","!createrole" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }else rolename = args[0]
        if (args[1] == ""){

            message.channel.send("Enter a valid color! \n DEFAULT \n AQUA \n GREEN \n BLUE \n PURPLE \n LUMINOUS_VIVID_PINK \n GOLD \n ORANGE \n RED \n GREY \n DARKER_GREY \n NAVY \n DARK_AQUA \n DARK_GREEN \n DARK_BLUE \n DARK_PURPLE \n DARK_VIVID_PINK \n DARK_GOLD \n DARK_ORANGE \n DARK_RED \n DARK_GREY \n LIGHT_GREY \n DARK_NAVY \n RANDOM")
        }
        else if(!rolename){
            message.reply("Enter a role name!");
        }
        else{
        let roleEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("__New Role Name__ ",rolename)
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