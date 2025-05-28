const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dataBaseName = 'e-comm'
const client = new MongoClient(url)

async function getData() {
    let result = await client.connect();
    db = result.db(dataBaseName)
    return db.collection('products')
}

module.exports = getData;