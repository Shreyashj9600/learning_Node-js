const fs = require('fs');
const path = require('path')

const fileName = 'test.txt'
const filePath = path.join(__dirname, fileName)

// fs.writeFileSync(fileName, 'this is the initial Data', 'utf-8');
// utf-8 (short for "8-bit Unicode Transformation Format ") uncode characters from 
// nearly all written languages ,symbols and emojis .

// console.log(__dirname);

// Create file 
// const writeFile = fs.writeFileSync(
//     filePath,
//     'this is a initial data',
//     'utf-8'
// )

// console.log(writeFile);

// Read file
//fs.readFileSync(): reads a file's content and return its string or Buffer

// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile.toString()) 
// console.log(readFile)


// update file 
// fs.appendFileSync(); Append data to a file. if the file does not exist, it
// creates the file.

// const appendFile = fs.appendFileSync(
//     filePath,
//     '\nthis is a update data',
//     'utf-8'
// )

//Delete file 
// delete file (fs.unlinkSync()): Deletes a file by its path.

// const fileDelete = fs.unlinkSync(filePath)
// console.log(fileDelete);


//Rename file 
// rename a file from one name to another name 
// fs.renameSync(oldPath , newPath)


const newUpdateFileName = "update.txt"
const newFilePath = path.join(__dirname, newUpdateFileName)
const renameFile = fs.renameSync(filePath, newFilePath)

console.log(renameFile);