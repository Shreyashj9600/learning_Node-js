const express = require('express')

const app = express();

app.get('/', (req, res) => {
    console.log('data send from browser', req.query.name);
    res.send(`
        <h1>welcome, this is home page</h1>
        <a href='/about'>go to about page </a>
        `);
    res.end()
})

app.get('/about', (req, res) => {
    res.send(`
            <input type='text' placeholder='enter a name' value='${req.query.name}'/>
            <button>click me</button>
            <a href='/'>go to home page<a/>
        `)
        res.end()
})

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'shreyash',
            email: 'shreyash@gmail.com'
        },
        {
            name: 'yash',
            email: 'yash@gmail.com'
        },
        {
            name: 'shreyash',
            email: 'shreyash@gmail.com'
        },
        {
            name: 'yash',
            email: 'yash@gmail.com'
        }]
    )
})

app.listen(3000)