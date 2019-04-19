const Discord = require("discord.js");


module.exports = {
    help: {
        name: "settopic",
        description: "Sets the channel topic",
        usage: "!settopic",
        command: "!settopic",
        aliases: [],
        aliasname: "st",

    },

run: async (bot, message, args) => {
    if(args[0] == "help"){

    let Embed = new Discord.RichEmbed()
    .setTitle("Set Topic")
    .setColor("#FF0000")
    .addField("Command: ","!settopic" )
    .addField(`Usage: `,module.exports.help.usage)
    .addField("Description: ", module.exports.help.description)
    .addField("Aliases: ",module.exports.help.aliasname)
    .setTimestamp();
    message.channel.send(Embed);
    return;
    }else channeltopic = args.join(" ");
    
     let channelEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("New Channel Topic ",channeltopic)
        .addField("Changed By ", message.author)
        .setTimestamp();
        
        message.channel.setTopic(channeltopic);
        message.channel.send(channelEmbed);    
}
}