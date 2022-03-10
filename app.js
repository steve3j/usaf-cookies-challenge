const express = require('express')
var cookieParser = require('cookie-parser')
const app = express()
const port = 3000

let name = 'Jeff'

app.use(cookieParser())

app.get('/login', function(req, res) {
    var opts = {
      maxAge: 900000,
      httpOnly: true
    };
    res.cookie('name', name, opts);
    res.end();
  })

app.get('/hello', function(req, res) {
    console.log('Cookies: ', req.cookies)
    if (req.cookies.name === name) {
        res.send(`Welcome ${name}, you are cool! :)`)
    }
    else 
        res.send('get a job u hacker')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))