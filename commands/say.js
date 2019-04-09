const Discord = require("discord.js");

module.exports = {
    help: {
        name: "say"
    },

run: async (bot, message, args) => {
    
    
    
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Need Higher Permission!");
    let botmessage = args.join(" ");
    if(!botmessage) return message.reply("Enter a valid statement!");
    message.delete().catch();
    message.channel.send(botmessage);


    }




}
