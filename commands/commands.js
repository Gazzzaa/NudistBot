const Discord = require("discord.js");
module.exports = {
    help: {
        name: "commands",
        description: "Outputs list of commands",
        usage: "!commands",
        command: "!commands", 
    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor("#FF0000")
        .addField("Command: ", module.export.help.command)
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
     let commandsEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Commands")
        .setDescription(bot.commands.map(commands => commands.help.command).join(` \n ` ))     
        .setFooter("Type help after any command to get help, e.g !commands help");
         
        
    message.channel.send(commandsEmbed);
    return;
    
    

    
   
    }



}
