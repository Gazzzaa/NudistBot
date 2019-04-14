const Discord = require("discord.js");
const fs = require("fs");


module.exports.noPerms = (message, perms) => {

    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setTitle("No Permissions")
    .addField("__User__", message.author)
    .addField("__Insuffiecient Permission__", perms)
    .setTimestamp();
    message.channel.send(embed);



}