const Discord = require('discord.js');

module.exports = {
    config: {
        name: `me`,
        aliases: [`me`]
    },
      if(!message.member.roles.has("rol-id")) return message.reply('Bu komutu kullanmak için booster rolüne sahip olmalısın!').then(x => x.delete({timeout: 3000}))
      let isim = args.slice(0).join(" ")
      let tag = "";
      message.member.setNickname(`${tag} ${isim}`)
      message.react("👍")
 }
}
