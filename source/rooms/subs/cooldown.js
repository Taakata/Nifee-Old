let { set } = require('../../apis/apis')

module.exports = class cooldown {
    constructor() {
        this.time = 3000
        this.msg = 'This command is on cooldown!'
    }

    add(user) {
        if (!this.verify(user)) return set.add(user);
    }

    del(user) {
        if (this.verify(user)) return set.delete(user);
    }

    verify(user) {
        if (set.has(user)) return true;
        else return false;
    }

}