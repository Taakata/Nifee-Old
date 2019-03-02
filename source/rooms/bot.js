require('dotenv').config()
let { djs } = require('../apis/apis')

module.exports = class bot extends djs.Client {

    init() {
        return this.login(process.env.TOKEN)
    }

}