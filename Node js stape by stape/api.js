const express = require('express')
const dbConnect = require('./mongodb')
const app = express()
const mongoDB = require('mongodb')

app.use(express.json())

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    res.send(data)
})

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)

})

app.put('/', async (req, res) => {
    console.log(req.body);
    let data = await dbConnect();
    let result = data.updateOne(
        { name: "i phone 15" }, // {name:req.params.name}
        { $set: { price: 55 } }      // {$set:req.body}
    )
    res.send({ result: "updated" })
})

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await  data.deleteOne({ _id: new mongoDB.ObjectId(req.params.id) })
    
    res.send(result)
})

app.listen(3000)