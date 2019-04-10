const Discord = require("discord.js");

module.exports = {
    help: {
        name: "8ball",
        description: "Answers a question",
        usage: "!8ball <question>",
        command: "!8ball",
        aliases: [""],
    },

run: async (bot, message, args) => {

if(!args[0]) return message.reply("Enter a question for the magic 8ball!");
let replies = ["Yes","No","I don't know","Maybe","Ask me again later","It is certain","Without a doubt","As I see it, yes","Most likely","Cannot predict now","Concentrate and ask again","Don’t count on it","Very doubtful","My sources say no"];
if(args[0] == "help"){

    let Embed = new Discord.RichEmbed()
    .setTitle("8Ball")
    .setColor("#FF0000")
    .addField("Command: ","!8ball" )
    .addField(`Usage: `,module.exports.help.usage)
    .addField("Description: ", module.exports.help.description)
    .addField("Aliases","!",module.exports.help.aliases)
    .setTimestamp();
    message.channel.send(Embed);
    return;
}
 if(args[0] == "replies"){
    let repliesEmbed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .setTitle("___8Ball Replies List___")
    .setDescription("Yes \n No \n I don't know \n Maybe \n Ask me again later \n It is certain \n Without a doubt \n As I see it, yes \n Most likely \n Cannot predict now \n Concentrate and ask again \n Don’t count on it \n Very doubtful \n My sources say no");
    message.channel.send(repliesEmbed);
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
