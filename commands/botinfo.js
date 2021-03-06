const Discord = require("discord.js");


module.exports = {
    help: {
        name: "botinfo",
        description: "Shows information about the bot",
        usage: ".botinfo",
        command: ".botinfo",
        aliases: ["binfo"],
        aliasname: ".binfo",

    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("BotInfo")
        .setColor("#FF0000")
        .addField("Command: ",module.exports.help.command )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setColor("#caff0c")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt)
        .setFooter('Created by Emerald');
    
        return message.channel.send(botembed);
      
    
    
}
}