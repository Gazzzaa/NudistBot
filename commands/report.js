const Discord = require("discord.js");

module.exports = {
    help: {
        name: "report",
        description: "Reports a user",
        usage: "!report <user> <reason>",
        command: "!report",
        aliases: "",
    },

run: async (bot, message, args) => {
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Report")
        .setColor("#FF0000")
        .addField("Command: ","!report" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    let rUser = message.mentions.members.first()
    if(!rUser) return message.channel.send("Couldnt find user.");
    let reason = args.slice(1).join(" ");
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#caff0c")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
    
    let reportschannel = message.guild.channels.find(c => c.name === "nudistbottesting");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel."); 
    
    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    
}
}
