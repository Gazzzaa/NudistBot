const Discord = require("discord.js");
const ms = require("ms");
const errors = require("../utils/errors.js");
module.exports = {
    help:{
    name: "naughtycorner(n33ko-server)s",
    description: "Mutes user for a time period",
    usage: ".naughtcorner <user> <time>",
    command: ".naughtycorner",
    aliases: ["nc"],
    aliasname: ".nc",
},
    run: async (bot, message, args) => {
        if(args[0] == "help"){

            let Embed = new Discord.RichEmbed()
            .setTitle("naughtycorner")
            .setColor("#FF0000")
            .addField("Command: ",module.exports.help.command )
            .addField(`Usage: `,module.exports.help.usage)
            .addField("Description: ", module.exports.help.description)
            .addField("Aliases: ",module.exports.help.aliasname)
            .setTimestamp();
            message.channel.send(Embed);
            return;
        }
        let tmUser = message.mentions.members.first();
        if(!tmUser) return message.reply("Can't find user");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MEMBERS");
        if(tmUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be put in the naughty corner!");
        let muterole = message.guild.roles.find(r => r.name === "Naughty Corner");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "Naughty Corner",
                    color: "ffd000",
                    permissions:[]
                })
                
                    await Promise.all(message.guild.channels.map(chan => chan.overwritePermissions(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false,
                        SPEAK: false
                    })))
                }
            catch(_){
                return message.reply("Couldn't find \"NuaghtyCorner\" role, please create it.").then(m => m.delete(5000));
            }
        }
            const mutetime = args[1];
            if(!args[1]){
                message.channel.send("Enter a valid time, e.g. 10s, 10m, 10d");
            };
            

            await tmUser.addRole(muterole);
            message.reply(`${tmUser} has been put in the naughty corner for ${ms(mutetime)}`);
        
            setTimeout(() => {
               tmUser.removeRole(muterole);
               message.channel.send(`${tmUser} has been excused!`);
            }, ms(mutetime));

            const tmEmbed = new Discord.RichEmbed()
            .setColor("#e56b00")
            .addField("Put in the naught corner", `${tmUser}`)
            .addField("By", `${message.author}`)
            .addField("Time", args[1])
            .setTimestamp();

            const channel = message.guild.channels.find(c => c.name === "naughty-corner");
            return channel.send(tmEmbed);
           
    }
}   


