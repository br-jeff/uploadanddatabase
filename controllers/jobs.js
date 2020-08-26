module.exports = app => {

    app.get('/jobs',(req,res)=> res.send('jobs route'))
    
    app.post('/jobs', (req,res) => {
        console.log(req.body)
        res.send('post')

    })
}