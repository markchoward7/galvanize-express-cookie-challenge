const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())


app.get('/login', (req, res) => {
    if (req.query.name) {
        res.cookie("name", req.query.name)
        res.send("cookie set")
    } else {
        res.status(400).send("need a name to set the cookie")
    }
})

app.get('/hello', (req, res) => {
    res.send(`Hello ${req.cookies.name}`)
})


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))