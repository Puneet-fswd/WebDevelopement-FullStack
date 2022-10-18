//crud operations using mongoose

const mongoose = require('mongoose');

//connecting mongoose with mongodb
mongoose.connect('mongodb://localhost:27017/e-comm');

//declaring schema 
const productSchema = new mongoose.Schema(
    {
        category: String,
        brand: String,
        model: String,
        price: Number
    });

// creating data
const createInDb = async () =>
{
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel(
        {
            category: "mobiles",
            brand: "apple",
            model: "14",
            price: 969999
        });
    let result = await data.save();
    console.log(result);
}

// updating a data
const updateInDb = async () =>
{
    const product = mongoose.model('products', productSchema);
    let data = await product.updateOne(
        {
            model: '14 max'
        },
        {
            $set: {model: '14 pro'}
        });
    console.log(data);
}

// deleting a data
const deleteInDb = async () =>
{
    const product = mongoose.model('products', productSchema);
    let data = await product.deleteOne(
        {
            model: '14'
        });
    console.log(data);
}

// finding a data
const findInDb = async () =>
{
    const product = mongoose.model('products', productSchema);
    let data = await product.find(
        {
            model: '14 pro max'
        });
    console.log(data);
}


createInDb();
updateInDb();
// deleteInDb();
findInDb();