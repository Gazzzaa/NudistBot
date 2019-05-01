const Discord = require("discord.js");

module.exports = {
    help: {
        name: "acceptrules",
        description: "Accepts the rules",
        usage: ".acceptrules",
        command: ".acceptrules",
        aliases: [],
        aliasname: "",
    },

run: async (bot, message, args) => {
    rrUser = message.guild.members.get(message.author)
    let rrUser = message.mentions.members.first();
    rrUser.removeRole(`573269226761224202`);







}
}
