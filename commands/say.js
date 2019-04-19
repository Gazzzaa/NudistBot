const Discord = require("discord.js");

module.exports = {
    help: {
        name: "say",
        description: "Sends a message",
        usage: ".say <message>",
        command: ".say",
        aliases: ["speak"],
        aliasname: ".speak",
    },

run: async (bot, message, args) => {
    
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Say")
        .setColor("#FF0000")
        .addField("Command: ",module.exports.help.command )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Need Higher Permission!");
    let botmessage = args.join(" ");
    if(!botmessage) return message.reply("Enter a valid statement!");
    message.delete().catch();
    message.channel.send(botmessage);


    }




}
