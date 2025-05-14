const fs = require('fs')
const path = require('path')

const fileName = 'asyncFile.txt'
const filePath = path.join(__dirname, fileName);

const filePath1 = __dirname;

const readFolder = async () => {
    try {
        const res = await fs.promises.readdir(filePath1)
        console.log(res);

    } catch (error) {
        console.error(error)
    }
}

// readFolder();


// write file 
const writeFileExample = async () => {
    try {
        await fs.promises.writeFile(filePath, "file created by async await", 'utf-8')
    } catch (error) {
        console.log(error);
    }
}

writeFileExample();

// read file 

// const readFilelExample = async () => {
//     try {
//         const data = await fs.promises.readFile(filePath, 'utf-8');
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFilelExample()  

const updateFileExample = async () => {
    try {
        await fs.promises.appendFile(filePath, '\nthis is a updatede file data', 'utf-8');
        console.log('file update successfully')
    } catch (error) {
        console.log(error);
    }
}

updateFileExample()

const deleteFileExample = async () => {
    try {
        await fs.promises.unlink(filePath)
        console.log('file delete successufully ');

    } catch (error) {
        console.log(error);
    }
}


// deleteFileExample()