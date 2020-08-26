const connection = require('../infrastructure/connection')

class jobs {
    add(){
        const sql = 'insert into job  set ? '

        connection.query(sql, jobs, (err,result) => {
            if(err) console.log(err)

            else console.log(result)
        })

    }
}

module.exports = new jobs