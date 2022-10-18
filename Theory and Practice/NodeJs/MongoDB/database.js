//this is a database module which will be exported to all files when required to reduce the code length and complexity

const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    db = result.db('e-comm');
    return db.collection('products');
};

module.exports = dbConnect;