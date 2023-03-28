const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
res.send('Hello World!')
})
app.get('/bhavani', (req, res) => {
    res.send('Hello wwwWorld!')
    })
    app.get('/fswd', (req, res) => {
        res.send('Hello fswd World!')
        })
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})
