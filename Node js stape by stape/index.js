const fs = require('fs')
const path = require('path')
// fs.writeFileSync('apple.txt', 'this is a fruit');

const dirPath = path.join(__dirname, 'files')
console.log(dirPath);

// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + '/hello' + i + ' .txt', 'testing file and file no is '+ i +'')
// }

fs.readdir(dirPath,(err, files) => {
    files.forEach((item)=> {
        console.log(`file name is ${item}`);
    })
})