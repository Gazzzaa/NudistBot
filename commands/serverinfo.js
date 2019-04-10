const Discord = require("discord.js");
const moment = require("moment");
module.exports = {
    help: {
        name: "serverinfo",
        description: "Shows server information",
        usage: "!serverinfo",
        command: "!serverinfo",
        aliases: ["sinfo"],
    },

run: async (bot, message, args) => {
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Server Information")
        .setColor("#FF0000")
        .addField("Command: ","!serverinfo" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases",,module.exports.help.aliases)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    let sicon = message.guild.iconURL
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#caff0c")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Server ID: ", message.guild.id)
    .addField("Created On", `${moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
    .addField("Owner: ", message.guild.owner)
    .addField("Total Members", message.guild.memberCount)
    .addField("Roles", message.guild.roles.size)
    .addField("Region", message.guild.region);
    return message.channel.send(serverembed);
    
    
}

}
