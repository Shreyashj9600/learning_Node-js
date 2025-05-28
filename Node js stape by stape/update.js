const { name } = require('ejs');
const dbConnect = require('./mongodb')

const updateData = async () => {
    let data = await dbConnect()
    let result = data.updateOne(
        {name:'note 5' } ,{
            $set:{name:'note 5 pro max'}
        }
    )
    console.log(data);

}

updateData()