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
    let rUser;
    if(message.mentions.users.first()){
        rUser= message.mentions.users.first();
    }
    const member = message.guild.member(rUser);
    let gRole = member.guild.roles.find(r => r.name === "Member");
    await(rUser.removeRole(gRole.id));







}
}
