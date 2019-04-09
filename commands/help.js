const Discord = require("discord.js");
module.exports = {
    help: {
        name: "help",
        description: "Use !commands to get lists of commands.\n Help after a command will help you, e.g !addrole help",
        usage: "!help", 
    },

run: async (bot, message, args) => {
    

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
