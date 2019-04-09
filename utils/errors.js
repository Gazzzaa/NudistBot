const Discord = require("discord.js");
const fs = require("fs");


module.exports.noPerms = (message, perms) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#FF0000")
    .setTitle("No Permissions")
    .addField("Insuffiecient permission", perms);
    message.channel.send(embed);



}