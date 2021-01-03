const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

const token  = require(`./botAyarlar.json`);
const prefix = require(`./genelAyarlar.json`);
[`aliases`, `commands`].forEach(x => client[x] = new Discord.Collection());
["Komutlar", "Etkinlikler"].forEach(x => require(`./handlers/${x}`)(client));


client.on("userUpdate", async (oldUser, newUser) => {
if (oldUser.username !== newUser.username) {
let tag = "";
let sunucu = ""; 
let kanal = ""; 
let rol = ""; 
if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.channels.get(kanal).send(`**${newUser} adlı kişi (**${tag}**) tagımızı aldığı için <@&${rol}> rolü verildi**`)
client.guilds.get(sunucu).members.get(newUser.id).addRole(rol) 
}
if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
client.channels.get(kanal).send(`**${newUser} adlı kişi (**${tag}**) tagımızı çıkardığı için <@&${rol}> rolü alındı**`) 
} 
} 
})


client.on("userUpdate", async (oldUser, newUser) => {
if (oldUser.username !== newUser.username) {
let tag = "";
let sunucu = ""; 
let kanal = ""; 
let rol = ""; 
if (newUser.username.includes(tag) && !client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.channels.get(kanal).send(`**${newUser} adlı kişi (**${tag}**) yasaklı tagı aldığından dolayı <@&${rol}> rolü verildi**`)
client.guilds.get(sunucu).members.get(newUser.id).addRole(rol) 
}
if (!newUser.username.includes(tag) && client.guilds.get(sunucu).members.get(newUser.id).roles.has(rol)) {
client.guilds.get(sunucu).members.get(newUser.id).removeRole(rol)
client.channels.get(kanal).send(`**${newUser} adlı kişi (**${tag}**) yasaklı tagı çıkardığından dolayı <@&${rol}> rolü alındı**`) 
} 
} 
})

client.on("guildMemberAdd", member => {
  moment.locale('tr')
  let guild = member.guild;
  let kurulmatarihi = moment(member.user.createdAt).format('LL')
  let verilecekrol = "";
  let kanal = "";
  let yasaklitag = "";
  let tagrolu = "";
  
  member.roles.add(verilecekrol)
   const attachment = new Discord.Attachment('https://i.imgur.com/7P52Bho.gif');
  kanal.send(`:wave: ${member} Hoş geldin sunucuya, seninle beraber ${guild.members.size} \n Kayıt olmak için <#id> kanalına girebilirsin. \n Yetkililerimiz seninle ilgilenecektir. **(<@&id>)** \n Hesabın kurulma tarihi: **${kurulmatarihi}**`, attachment);
  if(member.user.username.includes(yasaklitag)) {
    member.roles.add(tagrolu)
    member.send("Hey! Yasaklı tagı aldığın için karantinaya alındın. Tagı çıkardığında rol gidecektir.").catch(kanal.send("Üyenin özeli kapalı! Üye: "+ member +""))
  }
})

client.login(token);
