const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");
module.exports = {
    help:{
    name: "mute",
    description: "Mutes user for a time period",
    usage: "!mute <user>",
    command: "!mute",
    aliases: ["mute"],
    aliasname: "!mute",
},
    run: async (bot, message, args) => {
        if(args[0] == "help"){

            let Embed = new Discord.RichEmbed()
            .setTitle("Mute")
            .setColor("#FF0000")
            .addField("Command: ","!mute" )
            .addField(`Usage: `,module.exports.help.usage)
            .addField("Description: ", module.exports.help.description)
            .addField("Aliases: ",module.exports.help.aliasname)
            .setTimestamp();
            message.channel.send(Embed);
            return;
        }
        let mUser = message.mentions.members.first()
        if(!mUser) return message.reply("Can't find user");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
        if(mUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be muted!");
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
        
            

            await mUser.addRole(muterole);
            message.reply(`${mUser} has been muted!`);
        

            const mEmbed = new Discord.RichEmbed()
            .setColor("#e56b00")
            .addField("Muted member", `${mUser}`)
            .addField("Muted by", `${message.author}`)
            .addField("Time", "Forever")
            .setTimestamp();

            const channel = message.guild.channels.find(c => c.name === "nudistbottesting");
            if (!channel) return message.reply("Couldn't find channel").then(m => m.delete(5000));
            return channel.send(mEmbed);
           
    }
}   


