const express = require('express')
const path = require('path')

const app = express();

const publicPath = path.join(__dirname, 'public')
// app.use(express.static(publicPath))

app.get('', (_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/home', (_, res) => {
    res.sendFile(`${publicPath}/home.html`)
})

app.get("*", (_, res) => {
    res.sendFile(`${publicPath}\error.html`)
})

app.listen(3000)