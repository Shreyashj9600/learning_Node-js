const path = require('path');

console.log(path);

console.log(__dirname);
console.log(__filename);

// school folder/student/data.txt

const filePath = path.join('folder', 'student', 'data.txt');
console.log(filePath);
