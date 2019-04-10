const Discord = require("discord.js");
module.exports = {
    help: {
        name: "help",
        description: "Use !commands to get lists of commands.\n To find help on a command write help after it, e.g !addrole help",
        usage: "!help",
        command: "!help", 
    },

run: async (bot, message, args) => {
    
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Help")
        .setColor("#FF0000")
        .addField("Command: ","!help" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
        let Embed = new Discord.RichEmbed()
        .setTitle("***Help***")
        .setColor("#FF0000")
        .addField("Command: ","!help" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        return message.channel.send(Embed);
        
    
  

}



}
