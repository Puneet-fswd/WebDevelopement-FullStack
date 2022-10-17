//updating data in MongoDB using NodeJs

const dbConnect = require('./database');

const update = async () =>
{
    const db = await dbConnect();
    let result = await db.updateOne(
        {
            price: '15999'    //entity to be updated 
        },
        {
            $set: 
            {
                price: '14999'
            }
        });
    console.log(result);
};
console.log('price updated!');

update();
