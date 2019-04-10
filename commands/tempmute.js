const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");
module.exports = {
    help:{
    name: "tempmute",
    description: "Mutes user for a time period",
    usage: "!tempmute <user> <10m>",
    command: "!tempmute",
    aliases: ["tmute"],
},
    run: async (bot, message, args) => {
        if(args[0] == "help"){

            let Embed = new Discord.RichEmbed()
            .setTitle("TempMute")
            .setColor("#FF0000")
            .addField("Command: ","!tempmute" )
            .addField(`Usage: `,module.exports.help.usage)
            .addField("Description: ", module.exports.help.description)
            .addField("Aliases","!",module.exports.help.aliases)
            .setTimestamp();
            message.channel.send(Embed);
            return;
        }
        let tmUser = message.mentions.members.first()
        if(!tmUser) return message.reply("Can't find user");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
        if(tmUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be muted!");
        let muterole = message.guild.roles.find(r => r.name === "muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "muted",
                    color: "ffd000",
                    permissions:[]
                })
                
                    await Promise.all(message.guild.channels.map(chan => chan.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })))
                }
            catch(_){
                return message.reply("Couldn't find \"muted\" role, please create it.").then(m => m.delete(5000));
            }
        }
            const mutetime = args[1] || "10m";
            

            await tmUser.addRole(muterole);
            message.reply(`${tmUser} has been muted for ${ms(mutetime)}`);
        
            setTimeout(() => {
               tmUser.removeRole(muterole);
               message.channel.send(`${tmUser} has been unmuted!`);
            }, ms(mutetime));

            const tmEmbed = new Discord.RichEmbed()
            .setColor("#e56b00")
            .addField("Muted member", `${tmUser}`)
            .addField("Muted by", `${message.author}`)
            .addField("Time", mutetime)
            .setTimestamp();

            const channel = message.guild.channels.find(c => c.name === "nudistbottesting");
            if (!channel) return message.reply("Couldn't find channel").then(m => m.delete(5000));
            return channel.send(tmEmbed);
           
    }
}   


