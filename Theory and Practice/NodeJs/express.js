const express = require('express');
const app = express();

app.set('view engine', 'ejs');   //setting template engine

app.get('', (req, res) =>
{
    console.log('data sent by browser --> ', req.query.name);   //query is the parameter req entered in the browser, ex)localhost?name=puneet
    res.send('<h1>Hello, this is the home page</h1>');
});

//to remove file extensions we use app.sendFile(`${path variable for folder}`/file name);

app.get('/profile', (req, res) =>
{
    const user = 
    {
        name: 'Puneet',
        email: 'demo@gmail.com',
        city: 'thane',
        age: '18',
        skills: ['html', 'css', 'javascript', 'react', 'node']
    }
    res.render('profile', {user});
})

app.get('/login', (req, res) =>
{
    // Rendering login.ejs page
    res.render('login');
})

app.get('/about', (req, res) =>
{
    res.send
    (`
        <h1>Hello, this is the about page</h1>
        <button><a href="/">Home Page</a></button>
    `);
});

app.get('/help', (req, res) =>
{
    res.send
    (`
        <h1>Hello, this is the help page</h1>
        <input type="text" placeholder="query"/>
        <button>Send</button>
        <button><a href="/">Home Page</a></button>
        <button><a href="/about">About Page</a></button>
    `);
});

app.get('*', (req, res) =>
{
    res.send('404! Page not found');
})

app.listen(80);

// code to access html pages 
// app.use(express.static(path variable));