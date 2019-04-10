const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "ban",
        description: "Bans a user from the server ",
        usage: "!ban <user> <reason>",
        command: "!ban",
        aliases: [""],
    },

run: async (bot, message, args) => {
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Ban")
        .setColor("#FF0000")
        .addField("Command: ","!ban" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }

        let bUser = message.mentions.members.first()
        if(!bUser) return message.channel.send("Can't find user!");
        let bReason = args.join(" ").slice(1);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be banned!");
        
        
        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#FF0000")
        .addField("Banned User", `${bUser} with ID: ${bUser.id}`)
        .addField("Banned By", `<${message.author.id}> with ID: ${message.author.id}`)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);
        
        let banChannel = message.guild.channels.find(c => c.name === "nudistbottesting");
        if(!banChannel) return message.channel.send("Couldn't find ban channel.");
        
        bUser.ban(bReason)
        banChannel.send(banEmbed);
}
}
