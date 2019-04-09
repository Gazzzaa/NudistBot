const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    help: {
        name: "monkey"
    },
    
    run: async (bot, message, args) => {
        message.channel.send(`https://media.discordapp.net/attachments/307414695974010882/516608597279506461/Screenshot_20181126-083737.jpg?width=504&height=677`)
        return;
    }
}