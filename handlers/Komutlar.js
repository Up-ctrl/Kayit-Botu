const readdirSync = require(`fs`);

module.exports = (bot) => {
    const load = dirs => {
        const commands = readdirSync(`./Komutlar/${dirs}/`).filter(d => d.endsWith(`.js`));
        for(let file of commands) {
            let pull = require(`../Komutlar/${dirs}/${file}`);
            bot.commands.set(pull.config.name, pull);
            if(pull.config.aliases) pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
            console.log(`${pull.config.name} Yüklendi`)
        }
    };
    ["kayıt"].forEach(x => load(x));
}
