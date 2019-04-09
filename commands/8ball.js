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
    .setDescription("~8Ball~")
    .setColor("#FF0000")
    .addField("Command: ","!8ball" )
    .addField(`Usage: `,module.exports.help.usage)
    .addField("Description: ", module.exports.help.description)
    .setTimestamp();
    message.channel.send(Embed);
    return;
}
 

let result = Math.floor((Math.random() * replies.length));
let question = args.join(" ");

let ballEmbed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#caff0c")
.addField("Question", question)
.addField("Answer", replies[result])
.setTimestamp();
message.channel.send(ballEmbed);


}
}