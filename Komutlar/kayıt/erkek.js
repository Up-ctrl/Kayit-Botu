const Discord = require('discord.js');

module.exports = {
    config: {
        name: `erkek`,
        aliases: [`e`]
    },

    run: async (client, message, args) => {
        if(!message.member.roles.has("")) return message.reply('Bu komutu kullanamazsın.')
        let erkekrol = "";
        let kızrol = "";
        let kayıtsız = "";
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let isim = args.slice(1).join(" ");
        let yas = args[2];
        if(!member) return message.reply('Bir üye etiketlemelisin.')
        if(!isim) return message.reply('Bir isim girmelisin.')
        if(!yas) return message.reply('Bir yaş girmelisin.')
        if(isNaN(yas)) return message.reply('Geçersiz yaş')
      
        member.setNickname("• "+ isim +" | "+ yas +"")
        member.roles.add(erkekrol)
        member.roles.remove(kayıtsız)
        member.roles.remove(kızrol)
        const erkekembed = new Discord.MessageEmbed()
         .setTitle("Kayıt İşlemi")
        .setColor("GREEN")
        .setTimestamp()
        .setAuthor(member.user.tag, member.user.avatarURL({dynamic: true, size: 1024, format: 'png'}))
        .addField(":white_check_mark: <@"+ member +">, Başarıyla erkek olarak kayıt edildi.","`Kayıt edilen kullanıcı:` **<@"+ member +">** \n `Kullanıcının yeni ismi:` "+ isim +" \n `Kayıt eden yetkili:` **<@"+ message.member.id +">** \n `Verilen roller:` **<@&"+ erkekrol +">** \n `Alınan roller:` **<@"+ kayıtsız +">**")
      message.channel.send(erkekembed).catch(message.channel.send(":stop: **__HATA__** Gerekli rolleri veremiyorum, ya bu kişinin rolü benden üstte ya da benim yeterli rolüm yok. (Gerekli Rol: Rolleri Yönet)"))
       
    let kanal = "";
      const hgembed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTimestamp()
      .setAuthor(member.user.tag, member.user.avatarURL({dynamic: true, size: 1024, format: 'png'}))
      .setDescription(`<@${member}> Aramıza hoş geldin!`)
      message.channel.send(kanal)
    }
}
