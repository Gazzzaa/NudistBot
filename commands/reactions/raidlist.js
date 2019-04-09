const Discord = require("discord.js");
const fs = require("fs");
module.exports = {
    help: {
        name: "raidlist"
    },
    
    run: async (bot, message, args) => {

        let Embed = new Discord.RichEmbed()
        .setTitle("Raid List")
        .setDescription("40 detonators \n 40 launchers \n 1000 c4 \n 500 rockets \n 30 behe sets \n 200 billboards \n 200 spike walls\n 750 foundation \n 250 ceilings \n 700 walls \n 100 doors & door-frames \n 200 pillars \n 20 giant hatchframes \n 50 small metal dino gateframes \n 30 large crop plots with fert and 10 of plant x y z seeds \n 30 beds \n Smithy & Fabricator \n 3 fridges \n 6 vaults \n 6 Metal cliff Platform* \n Motorboat \n 2 Fridges of veggie cakes* \n 2 troughs\n 2000 gasoline \n 25 generators & 100 of each cable + 30 outletsn 2 Transmitter \n 2 Teleporter \n 2 Tek Generator \n All artifacts for boss fight \n 100 charge batteries \n Cannon + 60 cannon balls \n 25 heavies/20 regular turrets \n 300 slots of AR rounds \n 4000 rounds shotgun ammo \n 40 shotguns 220 + damage \n 1 vault of Metal for repairs");
        message.channel.send(Embed);
        return;



    }
}