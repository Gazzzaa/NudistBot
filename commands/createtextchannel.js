const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "addrole",
        usage: "!addrole <user> <role> ",
        description: "Adds a role to a user"
    },

run: async (bot, message, args) => {

    
    
    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Add Role")
        .setColor("#FF0000")
        .addField("Command: ","!addrole" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
  
    message.guild.createChannel(`${args[0]}`);
    message.reply("Channel was creates sucessfully");
     
   

    
    
}
}