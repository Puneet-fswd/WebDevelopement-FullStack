const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res)=>
{
    res.send('This is an express app');
})
app.get('/about', (req, res)=>
{
    res.send('This is about page of an express app');
})
app.post('/about', (req, res)=>
{
    res.send('This is post request for about page of an express app');
})
app.get('/this', (req, res)=>
{
    res.status(400).send('Page not found');
})

app.listen(port, ()=>
{
    console.log(`App started successfully on port ${port}`);
})