const Discord = require("discord.js");
const moment = require("moment");


module.exports = {
    help: {
        name: "userinfo",
        description: "Shows information about the user",
        usage: "!userinfo",

    },

run: async (bot, message, args) => {
    
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("User Information")
        .setColor("#FF0000")
        .addField("Command: ","!userinfo" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    let userinfo;
    if(message.mentions.users.first()){
        userinfo = message.mentions.users.first();
    }
    else {
        userinfo = message.author;
    }
    const member = message.guild.member(userinfo);

        let botembed = new Discord.RichEmbed()
        .setColor("#caff0c")
        .setImage(userinfo.avatarURL)
        .addField("Username: ", `${userinfo.username}#${userinfo.discriminator}`)
        .addField("ID: ", userinfo.id)
        .addField("Profile Created At: ", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
        .addField("Status: ", `${userinfo.presence.status}`)
        .addField("Roles: ", member.roles.map(roles => `${roles.name}`).join(", "))
        .setTimestamp();
    
        return message.channel.send(botembed);
      
    
    
}
}