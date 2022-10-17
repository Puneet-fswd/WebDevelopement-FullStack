//deleting data in MongoDB using NodeJs

const dbConnect = require('./database');

const deleteData = async () =>
{
    const db= await dbConnect();
    let result = await db.deleteOne(
        {
            model: 'galaxy s10'
        });
    console.log(result);
};

const add_deleted_data = async () =>
{
    const db= await dbConnect();
    let add = await db.insertOne(
        {
            category: 'mobiles',
            brand: 'samsung',
            model: 'galaxy s10',
            price: '55999'
        });
    console.log('data re-updated');
};

deleteData();
add_deleted_data();