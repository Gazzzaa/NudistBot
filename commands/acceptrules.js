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
let rrUser = message.guild.fetchMember(message.member);
rrUser.removeRole(`573256244283048006`);


    







}
}
