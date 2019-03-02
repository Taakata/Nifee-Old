let { commands } = require('../rooms/index')
let { cooldown } = require('../rooms/subs/index')

class Message {

    static on(msg) {
        let cd = new cooldown()
        if (!msg.content.startsWith('nifee ') | !msg.guild | msg.author.bot) return;
        let arg = msg.content.slice('nifee '.length).split(/ +/g)
        commands.run(arg, msg)
        cd.verify(msg.author) ? msg.channel.send(cd.msg) : cd.add(msg.author)
        setTimeout(() => { cd.del(msg.author) }, cd.time)
    }

}

module.exports = Message.on
