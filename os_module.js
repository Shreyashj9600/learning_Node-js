const os = require('os');

console.log('platform', os.platform());
console.log('user', os.userInfo());
console.log('cpu Architecture', os.arch());
console.log('free memory ', os.freemem());
console.log('total memory', os.totalmem());
