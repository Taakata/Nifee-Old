let nifee = require('../Nifee')

module.exports = class command {
    constructor() {
        this.bot = nifee.bot
    }

    canLoad() {
        return true;
    }

    markdown(type, str) {
        return `\`\`\`${type}\n${str}\`\`\``
    }
    
}
