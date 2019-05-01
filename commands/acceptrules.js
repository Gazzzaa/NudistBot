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
  
    let memberRole = member.guild.roles.find(r => r.name === "Member");
    const member = message.guild.member(rrUser);
    await(rrUser.removeRole(memberRole.id));







}
}
