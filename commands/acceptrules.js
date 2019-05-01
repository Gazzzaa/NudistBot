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
    let rrUser = message.mentions.members.first();
    const member = message.guild.member(rrUser);
    let memberRole = member.guild.roles.find(r => r.name === "Member");
    
    await(rrUser.removeRole(memberRole.id));







}
}
