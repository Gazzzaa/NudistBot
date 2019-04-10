const Discord = require("discord.js");

module.exports = {
    help: {
        name: "ping",
        description: "Shows ping",
        usage: "!ping",
        command: "!ping",
        aliases: [""],
    },

run: async (bot, message, args) => {

if(args[0] == "help"){

    let Embed = new Discord.RichEmbed()
    .setTitle("Ping")
    .setColor("#FF0000")
    .addField("Command: ","!ping" )
    .addField(`Usage: `,module.exports.help.usage)
    .addField("Description: ", module.exports.help.description)
    .setTimestamp();
    message.channel.send(Embed);
    return;
}
    let pingEmbed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("Pong!")
    .setDescription("The ping is: " + Math.round(bot.ping));
    
    message.channel.send(pingEmbed);
  

}


}
