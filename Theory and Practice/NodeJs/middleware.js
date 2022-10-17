const express = require('express');
const app = express();
const route = express.Router();     //route is the name of the middleware to be used

//setting up middleware
const reqFilter = (req, res, next) => 
{
    if (!req.query.age) 
    {
        res.send("<h2>Please provide your age</h2>")
    }
    else if (req.query.age<18) 
    {
        res.send("<h2>You are under age to access this page</h2>")
    }
    else 
    {
        next();
    }
}

// app.use(reqFilter);  --> setting up application level middleware

route.use(reqFilter);

route.get('/', (req, res) => 
{
    res.send('<h1>Welcome to Home page</h1>')
});

route.get('/users', (req, res) => 
{
    res.send('<h1>Welcome to Users page</h1>')
});

app.get('/about', (req, res) => 
{
    res.send('<h1>Welcome to About page</h1>')
});

route.get('/sources', (req, res) => 
{
    res.send('<h1>Welcome to Sources page</h1>')
});

route.get('/contact', (req, res) => 
{
    res.send('<h1>Welcome to Contact page</h1>')
});

app.use('/', route);    //setting up route level middleware

app.listen(80);