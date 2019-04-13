const Discord = require("discord.js");


module.exports = {
    help: {
        name: "todo",
        description: "Shows information about the bot",
        usage: "!botinfo",
        command: "!botinfo",
        aliases: ["binfo"],
        aliasname: "!binfo",

    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("BotInfo")
        .setColor("#FF0000")
        .addField("Command: ","!botinfo" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
        message.channel.fetchMessage(`565503319641030657`)
        .then(message.channel.send(message.content));
       
      
    
    
}
}