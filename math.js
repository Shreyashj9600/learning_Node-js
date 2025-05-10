const add = (num1, num2) => {
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const mult = (num1, num2) => {
    return num1 * num2
}

const div = (num1, num2) => {
    return num1 / num2
}

// 1
// module.exports = add;

// 2
module.exports.add = add
module.exports.sub = sub

// 3
module.exports = { add, sub, mult, div }