require('http').createServer().listen(3000)
let { bot, commands, listeners } = require('./rooms/index')
let { path } = require('./apis/apis')
let c = new bot()

new commands().load(path.join(__dirname, './commands'))
new listeners().load(path.join(__dirname, './listeners'), c)

module.exports=class{constructor(){this.bot=c}}

c.init()
