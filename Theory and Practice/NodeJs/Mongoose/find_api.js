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

app.get("/find/:key", async (req, res) =>
{
    console.log(req.params.key);
    const product = mongoose.model('products', productSchema);
    let data = await product.find(
        {
            "$or": 
            [
                {
                    "brand": 
                    {
                        $regex: req.params.key
                    }
                },
                {
                    "model": 
                    {
                        $regex: req.params.key
                    }
                }
            ]
        }
    );
    res.send(data);
    console.log(data);
});

app.listen(80);