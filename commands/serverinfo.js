const Discord = require("discord.js");

module.exports = {
    help: {
        name: "serverinfo"
    },

run: async (bot, message, args) => {
    
    let sicon = message.guild.iconURL
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#caff0c")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", bot.user.createdAt)
    .addField("Total Members", message.guild.memberCount);
    return message.channel.send(serverembed);
    
    
}

}
