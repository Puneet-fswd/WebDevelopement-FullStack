//importing required files
const colors = require('colors');
const api = require('./apis')

//creating servers
const http_1 = require('http');
http_1.createServer((req, res)=>
{
    res.writeHead('200', {'Content-type': 'application\html'})
    res.write('<h1>Hello, this is my first server on port-4500</h1>');
    res.end();
}).listen(4500);
console.log('Listening at port 4500'.blue);

// or method
const server = (req, res) =>
{
    res.writeHead('200', {'Content-type': 'application\html'})
    res.write("<h1>Hello, this is my first server on port-80</h1>");
    res.end();
}
http_1.createServer(server).listen(80);
console.log('Listening at port 80'.yellow);

const http_2 = require('http');
http_2.createServer((req, res)=>
{
    res.wrteHead('200', {'Content-type': 'application\json'})
    res.write(JSON.stringify(api));
    res.end();
}).listen(3000);
console.log('Listening at port 3000'.green);
