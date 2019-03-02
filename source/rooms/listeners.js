let { fs, path } = require('../apis/apis')

module.exports = class listeners {
    constructor() {
        this.listeners = []
    }

    load(locale, bot) {
        fs.readdirSync(locale).forEach(event => {
            let eventName = event.replace(/.js/g, '')
            bot.on(eventName, require(`${locale}/${event}`))
            return this.listeners.push(eventName);
        })
    }
    
}