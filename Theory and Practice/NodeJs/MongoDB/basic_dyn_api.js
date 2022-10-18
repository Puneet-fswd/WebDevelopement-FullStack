//basic dynamic api using a database

const dbConnect = require('./database');
const mongodb = require('mongodb')
const express = require('express');
const app = express();

app.use(express.json());    //using a middleware to connect mongodb and postman

//get API - fetch data
app.get('/', async (req,res) =>
{
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

// post API - insert data
app.post('/', async (req,res) =>
{
    let data = await dbConnect();
    let result = await data.insert(req.body);   //req.body is function to add the data written in the body of postman post request
    res.send(result);
});

// put API - update data
app.put('/', async (req, res) =>
{
    let data = await dbConnect();
    let result = await data.updateOne(
        {
            price: '85999'
        },
        {
            $set: req.body
        }
    );
    res.send(result);
});

// delete API - update data
app.delete('/:id', async (req, res) =>
{
    let data =await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
})

app.listen(80);