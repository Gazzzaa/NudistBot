const Discord = require("discord.js");
const errors = require("../utils/errors.js");
module.exports = {
    help: {
        name: "addrole",
        usage: "!addrole <user> <role> ",
        description: "Adds a role to a user"
    },

run: async (bot, message, args) => {

    let raUser = message.mentions.members.first();
    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
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
  
    
     
    if(!raUser) return message.channel.send("Can't find user!");    
    let role = args.join(" ").slice(1);   
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(r => r.name === role);
    if(!gRole) return message.reply("Couldn't find that role.");

    if(raUser.roles.has(gRole.id)) return message.reply("They already have that role.");
    await(raUser.addRole(gRole.id));


    message.channel.send(`${raUser} has been given the role ${gRole.name}`);

    
    
}
}


