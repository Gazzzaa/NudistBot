const Discord = require("discord.js");

module.exports = {
    help: {
        name: "8ball",
        description: "Answers a question",
        usage: "!8ball <question>"
    },

run: async (bot, message, args) => {

if(!args[0]) return message.reply("Enter a question for the magic 8ball!");
let replies = ["Yes.","No.","I don't know.","Maybe.","Ask me later."];
if(args[0] == "help"){

    let Embed = new Discord.RichEmbed()
    .setTitle("8Ball")
    .setColor("#FF0000")
    .addField("Command: ","!8ball" )
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
