const connection = require("./connection")
const { connect } = require("./connection")

class Tables {
    init(connection) {
        this.connection = connection
        this.makeJob()
    }

        
    makeJob() {
        const sql = 
        `create table job (id int NOT null AUTO_INCREMENT,
        client varchar(50) NOT null, pet varchar(20),
        service varchar(20) NOT null, status varchar(20) NOT null,
        obs text , PRIMARY KEY(id)  )`

        this.connection.query(sql, (err,)=> {
            if (err) { console.log(err)} 
            else{
                console.log('table job was create')
            }

        })
    }
}

module.exports = new Tables