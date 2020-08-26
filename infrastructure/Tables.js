const connection = require("./connection")
const { connect } = require("./connection")

class Tables {
    init(connection) {
        console.log('teste tables')
    }
}

module.exports = new Tables