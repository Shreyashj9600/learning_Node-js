// Time for asynchronous 

const fs = require('fs')
const path = require('path')

//write file 
// fs.writeFile(): writes data file replacing the file if it already exists.
// syntax : fs.writeFile(path, data, options, callback) 

const fileName = 'fsAsync.txt';
const filePath = path.join(__dirname, fileName)

// const writeFile = fs.writeFile(filePath, 'this is async file created by me ', 'utf-8', (err) => {
//     if (err) console.error(err);
//     else console.log('File has been saved ');

// })

// read file 
//fs.readFile():  reads the content file asynchronously and return its string or Buffer or string
// styntax : fs.readFile(path, options, callback);
// function with two parameters (err, data)

// const readFile = fs.readFile(filePath, 'utf-8', (err, data) => {
//     if (err) console.error(err);
//     else console.log(data);
// })


// update or append file 
//fs.appendFile(): appends data to a file if the file doesn't exist it is created 
// syntac: fs.appenFile(path,data,options, callback) 

const updateFile = fs.appendFile(filePath, "\nhey i am update the file" , 'utf-8' , (err,data)=> {
    if(err) console.error(err);
    else console.log("file has been updated ")
})


// delete file 
// fs.unlink(): Delete file asynchronously 
// syntax : fs.unlink(filepath, callback)

// fs.unlink(filePath, (err) => {
//     if (err) console.log(err);
//     else console.log('file is deleted ')
// })