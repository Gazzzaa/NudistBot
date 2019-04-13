const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");
module.exports = {
    help:{
    name: "unmute",
    description: "Unmutes user",
    usage: "!unmute <user>",
    command: "!unmute",
    aliases: [],
},
    run: async (bot, message, args) => {
        if(args[0] == "help"){

            let Embed = new Discord.RichEmbed()
            .setTitle("unmute")
            .setColor("#FF0000")
            .addField("Command: ","!unmute" )
            .addField(`Usage: `,module.exports.help.usage)
            .addField("Description: ", module.exports.help.description)
            .setTimestamp();
            message.channel.send(Embed);
            return;
        }
        let mUser = message.mentions.members.first();
        if(!mUser) return message.reply("Can't find user - mute");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
        if(mUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be unmuted!");
        let muterole = message.guild.roles.find(r => r.name === "muted");
        
    
            await mUser.removeRole(muterole);
            message.reply(`${mUser} has been unmuted!`);
        

            const mEmbed = new Discord.RichEmbed()
            .setColor("#e56b00")
            .addField("Unmuted Member", `${mUser}`)
            .addField("Unmuted by", `${message.author}`)
            .setTimestamp();

            const channel = message.guild.channels.find(c => c.name === "nudistbottesting");
            if (!channel) return message.reply("Couldn't find channel").then(m => m.delete(5000));
            return channel.send(mEmbed);
           
    }
}   


