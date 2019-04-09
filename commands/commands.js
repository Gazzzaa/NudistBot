const Discord = require("discord.js");
module.exports = {
    help: {
        name: "commands",
        description: "Outputs list of commands",
        usage: "!commands", 
    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setColor("#FF0000")
        .addField("Command: ","!commands" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    let commandsEmbed = new Discord.RichEmbed()
        .setTitle("Commands")
        .setDescription("!help \n !commands \n !botinfo \n !serverinfo \n !kick \n !ban \n !warn \n !warnings \n !tempmute \n !say \n !report \n !removerole \n !addrole \n !8ball");

        
        
    message.channel.send(commandsEmbed);
    return;
    
    

    
   
    }



}
