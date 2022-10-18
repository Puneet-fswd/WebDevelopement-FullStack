// making advanced dynamic API using nodejs, expressjs, mongoose

const mongoose = require('mongoose');
const express = require('express');

// connecting mongoose with mongodb
mongoose.connect('mongodb://localhost:27017/e-comm');

// declaring schema 
const productSchema = new mongoose.Schema(
    {
        category: String,
        brand: String,
        model: String,
        price: Number
    });

// setting up express
const app = express();

//parsing req.body
app.use(express.json());

// post API
app.post('/', async (req, res) =>
{
    const product = mongoose.model('products', productSchema);
    let data = new product(req.body);
    let result = await data.save();
    console.log(result);
    res.send(result);
})

// get API
app.get('/', async (req, res) =>
{
    const product = mongoose.model('products', productSchema);
    let data = await product.find();
    res.send(data);
});

// delete API
app.delete('/delete/:_id', async (req, res) =>
{
    const product = mongoose.model('products', productSchema);
    let data = product.deleteOne(req.params);
    res.send(data);
});

app.listen(80);