//insert data in MongoDB using NodeJs

const dbConnect = require('./database');

const insert = async () =>
{
    const db = await dbConnect(); 
    const result = await db.insert(
    [{
        category: 'mobiles',
        brand: 'samsung',
        model: 'galaxy s20',
        price: '65999'
    },
    {
        category: 'mobiles',
        brand: 'samsung',
        model: 'galaxy s10',
        price: '55999'
    }]);
    console.log(result);
}

insert();