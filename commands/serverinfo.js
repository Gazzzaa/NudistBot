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
    .addField("Server ID: ", message.guild.id)
    .addField("Created On", message.guild.createdAt)
    .addField("Owner: ", message.guild.owner)
    .addField("Total Members", message.guild.memberCount)
    .addField("Roles", message.guild.roles.size)
    .addField("Region", message.guild.region);
    return message.channel.send(serverembed);
    
    
}

}
