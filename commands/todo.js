const Discord = require("discord.js");


module.exports = {
    help: {
        name: "todobot",
        description: "Bots todo list",
        usage: "!todobot",
        command: "!todobot",
        aliases: [],
        aliasname: "",

    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Todod List Bot")
        .setColor("#FF0000")
        .addField("Command: ","!todobot" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
        message.channel.fetchMessage(`565503319641030657`)
        .then(message => message.channel.send(message.content));
        message.channel.send(`https://discordapp.com/channels/410961369945341962/563096148538163228/565503319641030657`);
       
      
    
    
}
}