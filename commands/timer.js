const Discord = require("discord.js");
module.exports = {
    help: {
        name: "timer",
        description: "Sets a timer",
        usage: "!timer "
    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Prune")
        .setColor("#FF0000")
        .addField("Command: ","!prune" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    
        let name = "Fill the Generators"
        const mutetime = args[2] || "7d";
        
        message.channel.send(name, "for", mutetime );
        Date.now() * mutetime;
        message.channel.send(name)


    }
    
    
}



