const Discord = require("discord.js");


module.exports = {
    help: {
        name: "renametxtchannel",
        description: "Renames a text channel",
        usage: "!renametxtchannel <name>",
        command: "!renametxtchannel",
        aliases: ["rtc"],
        aliasname: "!rtc",

    },

run: async (bot, message, args) => {
    let channelname;
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Rename text channel")
        .setColor("#FF0000")
        .addField("Command: ","!renametxtchannel" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }else channelname = args[0];

        let channelEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("New channel name: ",channelname)
        .addField("Changed by: ", message.author)
        .setTimestamp();
        
        message.channel.setName(channelname);
        message.channel.send(`This channel name has been changed to ` + channelname);    


      
    
    
}
}