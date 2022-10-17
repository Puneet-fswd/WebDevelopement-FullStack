//read data from MongoDB to NodeJs
const dbConnect = require('./database');

const read = async () =>
{
    const db = await dbConnect();
    const result = await db.find().toArray();
    console.log(result);
}

read();