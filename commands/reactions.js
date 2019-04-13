const Discord = require("discord.js");
module.exports = {
    help: {
        name: "reactions",
        description: "Outputs list of reactions",
        usage: "!reactions",
        command: "!reactions",
        aliases: [],
    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Reactions")
        .setColor("#FF0000")
        .addField("Command: ","!reactions" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    let commandsEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Reactions")
        .setDescription("!ascension \n !broodmother \n !monkey \n !ragboss \n !rockwell \n !raidlist \n !troll");

        
        
    message.channel.send(commandsEmbed);
    return;
    
    

    
   
    }



}
