const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "kick"
    },

run: async (bot, message, args) => {
    

        let kUser = message.mentions.members.first()
        if(!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(1);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
        
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("~Kick~")
        .setColor("#FF0000")
        .addField("Kicked User", `${kUser} with ID: ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID: ${message.author.id}`)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);
        
        let kickChannel = message.guild.channels.find(c => c.name === "nudistbottesting");
        if(!kickChannel) return message.channel.send("Couldn't find kicked channel.");
        
        kUser.kick(reason)
        kickChannel.send(kickEmbed);
}

}