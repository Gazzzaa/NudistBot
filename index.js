const { prefix }  = require("./config.json");
const token = process.env.token;
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{
if(err) console.log(err);


let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
  console.log("Couldn't find command.");
  return;
}

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  console.log(`${f} loaded!`);
  bot.commands.set(props.help.name, props);
  return;
})})

fs.readdir("./commands/reactions/", (err, files) =>{
  if(err) console.log(err);
  
  
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find command.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/reactions/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    return;
  })})


bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Playing Ark Survival Evolved");
});

bot.on("guildMemberAdd", async member =>{
  let verifiRole = member.guild.roles.find(r => r.name === "Verifi");
  console.log(`${member.id} joined the discord`);
  let joinChannel = member.guild.channels.find(c => c.name === "server-join");
  joinChannel.send(`Welcome to nudist discord ${member}, ${verifiRole} will verifi you soon!`);
});
bot.on("guildMemberRemove", async member =>{
  let DiscordRole = member.guild.roles.find(r => r.name === "Discord Manager");
  console.log(`${member.id} has left the discord`);
  let leaveChannel = member.guild.channels.find(c => c.name === "server-leave");
  leaveChannel.send(`The member ${member} has left the discord, ${DiscordRole}`);
});
if (command === 'ping') {
  message.channel.send('Pong.');
} else if (command === 'beep') {
  message.channel.send('Boop.');
}
bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot, message, args);

return;
})
bot.login(token);