const Discord = require("discord.js");

module.exports = {
    help: {
        name: "ping",
        description: "Shows ping",
        usage: "!ping",
        command: "!ping",
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
 
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }



}
