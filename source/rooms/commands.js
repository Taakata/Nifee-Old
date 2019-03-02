let { fs } = require('../apis/apis')

module.exports = class commands {
    constructor() {
        this.commands = []
    }

    load(locale) {
        fs.readdirSync(locale).forEach(category => {
            fs.readdirSync(`${locale}/${category}`).forEach(command => {
                let cmd = require(`${locale}/${category}/${command}`)
                return this.commands.push(new cmd())
            })
        })
    }

    static run(args, ...context) {
        return this.commands.filter(exec => exec.name === args | exec.aliases.includes(args))[0].run(args, ...context)
    }

}