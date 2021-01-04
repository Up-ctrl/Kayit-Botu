const Discord = require('discord.js')

module.exports = {
    config: {
        name: `say`,
        aliases: [`s`]
    },

    run: async (client, message, args) => {
    let tagrolu = "";
    let boosterrolu = "";
  
    let seskanalındakiuyeler = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
    let tagdakiuyeler = message.guild.roles.cache.get(tagrolu).members.size || "Rol ayarlamalısın.";
    /*Eğer çalışmazsa bunu kullanın; 
    let tag = "";
    let taguye = message.guild.members.filter(m => m.user.username.includes(tag)).size || "Tag ayarlamalısın.";
    */
    let toplamuye = message.guild.members.size;
    let boostbasanuyeler = message.guild.roles.cache.get(boosterrolu).members.size || "Rol ayarlamalısın.";
    let aktifuyeler = message.guild.members.cache.filter(x => x.presence.status != "offline").size;
    let cevrimdisiuyeler = message.guild.members.cache.filter(u => u.presence.status === "dnd").size;
    
    const sayembed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true })
      .setTimestamp()
      .setColor("BLUE")
      .setDescription("`Toplam üye:` **"+ toplamuye +"** \n `Aktif üyeler:` **"+ aktifuyeler +"** \n `Tagı almış üyeler:` **"+ tagdakiuyeler +"** \n `Çevrimdışı olan üyeler:` **"+ cevrimdisiuyeler +"** \n `Boost basan üyeler:` **"+ boostbasanuyeler +"**")
      .setFooter(message.guild.name)
      message.channel.send(sayembed)
  }
}
