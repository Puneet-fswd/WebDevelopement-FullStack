//basic dynamic api using a database

const dbConnect = require('./database');
const express = require('express');
const app = express();

app.use(express.json());    //using a middleware to connect mongodb and postman

//get API
app.get('/', async (res,resp) =>
{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});

//post API
app.post("/", async (req,resp) =>
{
    let data = await dbConnect();
    let result = await data.insert(req.body);   //req.body is function to add the data written in the body of postman post request
    resp.send(result);
});

app.listen(5000);