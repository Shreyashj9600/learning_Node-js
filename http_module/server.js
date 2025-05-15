const http = require('http')

//web server 
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello form node js ')
        res.end()
    }


    if(req.url === '/contact'){
        res.write('this is my contact page ')
        res.end()
    }
})


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})