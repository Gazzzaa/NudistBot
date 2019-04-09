const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    help: {
        name: "troll"
    },
    run: async (bot, message, args) => {

        let Embed = new Discord.RichEmbed()
        .setTitle("Troll")
        .setDescription("Island - 7, 35, 70, 227, 270, 362, 494, 509 \n Center- 48, 62, 103, 607, 635, 881, 884, 888 \n Rag- 65, 235, 237 ,311,327, 333, 604, 627, 955 \n Scorched-44, 46, 58, 949, 957 \nAbb - 759, 667, 669, 674,669, 693, 697, 688, 701, 708, 717, 768, 774,777,778, 780, 824, 826, 830 \n Extinction - 975, 987, 979, 1000, 1006, 1008, 1016, 1020, 1027, 1036, 1042, 1045,1046, 1047, 1048, 1055, 1057, 1054");
        message.channel.send(Embed);
        return;
    }
}