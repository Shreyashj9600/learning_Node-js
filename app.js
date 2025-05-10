// const add = require('./math')

// Destracture
const{ add, sub, mult, div } = require('./math')

console.log(add(5,10))
console.log(sub(5,10))
console.log(mult(5,10))
console.log(div(5,10))


// const math = require('./math')

// repatitev
// console.log(math.add(5,10))
// console.log(math.sub(5,10))
// console.log(math.mult(5,10))
// console.log(math.div(5,10))




// module.exports is a single value or object 
// when you reassign module.exports (e.g: module.exports = add ) its completely replace watever was previously assigned.
// if you reassign again (module.exports = mult), the previous value (add) is replaced with mult.