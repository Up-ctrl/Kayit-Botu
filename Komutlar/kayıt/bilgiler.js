const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    config: {
        name: `bilgi`,
        aliases: [`b`]
    },
      run: async (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  let isim = message.member.name;
  let discordagiristarihi = moment(message.member.user.createdAt).format('LL')
  let sunucuyagiristarihi = moment(message.member.joinedAt).format('LL')
  let durum = message.member.presence.status
  .replace("dnd","Rahatsız Etmeyin")
  .replace("online","Çevrimiçi")
  .replace("offline","Çevrimdışı")
  .replace("idle","Boşta")
  
  let roller = message.member.roles.cache.map(x => x).join(' , ')
  
  if(!member) {
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.member.user.tag, message.member.user.avatarURL({dynamic: true, size: 1024, format: 'png'}))
  .setColor("BLUE")
  .addField("__Kullanıcı Bilgisi__","`ID:` "+ message.author.id +" \n `İsim:` <@"+ message.member +"> \n Durum: "+ durum +" \n `Hesap oluşturma tarihi:` "+ discordagiristarihi +" \n **Sunucu Bilgisi:** \n Sunucuya giriş tarihi: " + sunucuyagiristarihi + " \n Rolleri: "+ roller +"")
  } else {
    let isim2 = member.name;
  let discordagiristarihi2 = moment(member.user.createdAt).format('LL')
  let sunucuyagiristarihi2 = moment(member.joinedAt).format('LL')
  let durum2 = member.presence.status
  .replace("dnd","Rahatsız Etmeyin")
  .replace("online","Çevrimiçi")
  .replace("offline","Çevrimdışı")
  .replace("idle","Boşta")
  
  let roller2 = member.roles.cache.map(x => x).join(' , ')
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL({dynamic: true, size: 1024, format: 'png'}))
  .setColor("BLUE")
  .addField("__Kullanıcı Bilgisi__","`ID:` "+ member.id +" \n `İsim:` <@"+ member +"> \n Durum: "+ durum2 +" \n `Hesap oluşturma tarihi:` "+ discordagiristarihi2 +" \n **Sunucu Bilgisi:** \n Sunucuya giriş tarihi: " + sunucuyagiristarihi2 + " \n Rolleri: "+ roller2 +"")
  }
  } 
}
