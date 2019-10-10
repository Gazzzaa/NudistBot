const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "prune",
        description: "Deletes messages",
        usage: ".prune <amount>",
        command: ".prune",
        aliases: [],
    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Prune")
        .setColor("#FF0000")
        .addField("Command: ",module.exports.help.command )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS")
        if(!args[0]) return message.channel.send("Enter a specfic number");
        message.channel.bulkDelete(args[0]).then(() =>{
        message.channel.send(`Cleared ${args[0]} messages`).then(msg => msg.delete(5000));


    });
    
    
}
}


