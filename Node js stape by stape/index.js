const express = require('express')
const app = express();

const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('pls provide a age ')
    }
    else if (req.query.age < 18) {
        res.send('you can not access this page ')
    } else {
        next()
    }
}

app.use(reqFilter)

app.get('/', (req, res) => {
    res.send('welcome to home page')
})

app.get('/user', (req, res) => {
    res.send('welcome to user page ')
})

app.listen(3000)