const Discord = require("discord.js");


module.exports = {
    help: {
        name: "userinfo",
        description: "Shows information about the user",
        usage: "!userinfo",

    },

run: async (bot, message, args) => {
    let userinfo = message.mentions.members.first();
    if(!userinfo) return message.channel.send("Can't find user!");  
    
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setDescription("~User Information~")
        .setColor("#FF0000")
        .addField("Command: ","!userinfo" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
 

        let uicon = userinfo.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setColor("#caff0c")
        .setImage(uicon)
        .addField("Username: ", `${message.userinfo.username}#${userinfo.tag}`)
        .addField("ID: ", userinfo.id)
        .setTimestamp();
    
        return message.channel.send(botembed);
      
    
    
}
}