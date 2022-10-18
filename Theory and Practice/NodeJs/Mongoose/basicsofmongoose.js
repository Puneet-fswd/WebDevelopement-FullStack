//connection of mongoose with mongodb, schema and model

const mongoose = require('mongoose');

const main = async () =>
{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = new mongoose.Schema(
        {
            category: String,
            brand: String,
            model: String,
            price: Number
        }
    );
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel(
        {
            category: "mobiles",
            brand: "apple",
            model: "14 pro max",
            price: 174999
        });
    let result = await data.save();
}

main();