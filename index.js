const { prefix }  = require("./config.json");
const token = process.env.token;
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{
if(err) console.log(err);


let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
  console.log("Couldn't find command.");
  return;
}

jsfile.forEach((f, i) =>{
  let props = require(`./commands/${f}`);
  bot.commands.set(props.help.name, props);
  props.help.aliases.forEach(alias =>{
    bot.aliases.set(alias, props.help.name)
  });
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
    bot.commands.set(props.help.name, props);
    return;
  })})


bot.on("ready", async () =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(".commands");
});

bot.on("guildMemberAdd", async member =>{
  console.log(`${member.id} joined the discord`);
  let joinChannel = member.guild.channels.find(c => c.name === "verification");
  if (!joinChannel){
    let memberRole = member.guild.roles.find(r => r.name === "Member");
    await(member.addRole(memberRole.id));
  }
  else{
  joinChannel.send(`Welcome to the discord ${member}, ${verifiRole} will verifi you soon!`);
  let verifiRole = member.guild.roles.find(r => r.name === "Verifi");
  let needsverifiRole = member.guild.roles.find(r => r.name === "Needs Verified");
  await(member.addRole(needsverifiRole.id));
  }
});
bot.on("guildMemberRemove", async member =>{
  console.log(`${member.id} has left the discord`);
  let leaveChannel = member.guild.channels.find(c => c.name === "join-leave-log");
  leaveChannel.send(`The member **${member.user.tag}** has left the discord!`);
});

bot.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
  if(commandfile) commandfile.run(bot, message, args, prefix);

return;
})
bot.login(token);