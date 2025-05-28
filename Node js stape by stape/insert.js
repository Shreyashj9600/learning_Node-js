const dbConnect = require('./mongodb')


const insert = async () => {
    let db = await dbConnect();
    const result = await db.insertMany(
        [
            { name: 'note 5', brand: 'redmi', price: 320, category: 'mobile' },
            { name: 'note 6', brand: 'redmi', price: 320, category: 'mobile' },
            { name: 'note 7', brand: 'redmi', price: 320, category: 'mobile' }
        ]
    )
    console.log(result);

    if (result.acknowledged) {
        console.log('data inserted');
    }

}

insert()    