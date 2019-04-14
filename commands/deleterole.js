const Discord = require("discord.js");


module.exports = {
    help: {
        name: "deleterole",
        description: "Deletes a role",
        usage: "!deleterole <name>",
        command: "!deleterole",
        aliases: ["dr"],
        aliasname: "!dr",

    },

run: async (bot, message, args) => {
    let rolename;

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Delete Role")
        .setColor("#FF0000")
        .addField("Command: ","!deleterole" )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }else rolename = args[0]
    
        if(!rolename){
        message.reply("Enter a role name!");
        }
        
        else{
        let roleEmbed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .addField("__Deleted Role__ ",rolename)
        .addField("__Deleted By__", message.author)
        .setTimestamp();
        
        guild.role.delete(rolename);
        message.channel.send(roleEmbed);    
        }

      
    
    
}
}