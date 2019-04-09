const Discord = require("discord.js");
module.exports = {
    help: {
        name: "commands",
        description: "Outputs list of commands",
        usage: "!commands", 
    },

run: async (bot, message, args) => {

    
    let commandsEmbed = new Discord.RichEmbed()
        .setTitle("**Commands**")
        .setDescription("**!help** \n **!commands** \n **!botinfo** \n **!serverinfo** \n **!kick** \n **!ban** \n **!warn** \n **!warnings** \n **!tempmute** \n **!say** \n **!report** \n **!removerole** \n **!addrole** \n **!8ball** ");

        
        
    message.channel.send(commandsEmbed);
    return;
    
    

    
   
    }



}
