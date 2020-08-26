const customExpress = require("./config/customExpress")
const connetion = require('./infrastructure/connection')
const connection = require("./infrastructure/connection")
const app = customExpress()

connection.connect(err => {

    if(err) {
        console.log(err)
    } else {
        console.log('you are connected')
    }
  
})

app.listen(3000)