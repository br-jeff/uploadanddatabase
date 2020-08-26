const connection = require('../infrastructure/connection')

class Jobs {
    add(jobs){
        const sql = 'insert into job  set ? '
        connection.query(sql, jobs, (err,result) => {
            if(err) {console.log(err)}

            else {console.log(result)}
        })

    }
}

module.exports = new Jobs