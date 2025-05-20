 const express = require('express')

 const app = express();

 app.get('/', (req,res) => {
    res.send('welcome, this is home page');
    res.end()
 })

 app.get('/about',(req,res) => {
    res.send('hello this is about page ')
 })

 app.listen(3000)