//updating data in MongoDB using NodeJs

const dbConnect = require('./database.js');

const update = async () =>
{
    const db = await dbConnect();
    let result = await db.updateOne(
        {
            price: '14999'    //entity to be updated 
        },
        {
            $set: 
            {
                price: '15999'
            }
        });
    console.log(result);
};
console.log('price updated!');

update();
