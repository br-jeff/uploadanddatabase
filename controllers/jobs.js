const Jobs = require('../model/Jobs')
module.exports = app => {

    app.get('/jobs',(req,res)=> res.send('jobs route'))

    app.post('/jobs', (req,res) => {
        const job = req.body

        Jobs.add(job)
        res.send('post')

    })
}