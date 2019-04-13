const Discord = require("discord.js");


module.exports = {
    help: {
        name: "createrole",
        description: "Creates a role",
        usage: "!createrole <name>",
        command: "!createrole",
        aliases: ["cr"],
        aliasname: "!cr",

    },

run: async (bot, message, args) => {
    let rolename;
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
    }else rolename = args[0];

        let roleEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("__New Role Name__ ",rolename)
        .addField("__Created By__", message.author)
        .setTimestamp();
        
        message.guild.createRole(rolename);
        message.channel.send(roleEmbed);    


      
    
    
}
}