const customExpress = require("./config/customExpress")
const connection = require("./infrastructure/connection")
const Tables = require('./infrastructure/Tables')
const app = customExpress()

connection.connect(err => {

    if(err) {
        console.log(err)
    } else {
        console.log('you are connected')
        Tables.init(connection)
    }
  
})

app.listen(3000)