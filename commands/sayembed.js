const Discord = require("discord.js");


module.exports = {
    help: {
        name: "sayembed",
        description: "Outputs an embed",
        usage: ".sayembed",
        command: ".sayembed",
        aliases: ["saye"],
        aliasname: ".saye",

    },

run: async (bot, message, args) => {

    if(args[0] == "help"){

        let Embed = new Discord.RichEmbed()
        .setTitle("Say embed")
        .setColor("#FF0000")
        .addField("Command: ",module.exports.help.command )
        .addField(`Usage: `,module.exports.help.usage)
        .addField("Description: ", module.exports.help.description)
        .addField("Aliases: ",module.exports.help.aliasname)
        .setTimestamp();
        message.channel.send(Embed);
        return;
    }
    if(!args[0]){
        message.channel.send("Enter a title");
    }else title = args[0]
    if(!args[1]){
        message.channel.send("Enter a message");
    }else msg = args.slice(1).join(" ");

        let sayEmbed = new Discord.RichEmbed()
        .setTitle(title)
        .setColor("#FF0000")
        .setDescription(msg);
        message.channel.send(sayEmbed);
      
    
    
}
}