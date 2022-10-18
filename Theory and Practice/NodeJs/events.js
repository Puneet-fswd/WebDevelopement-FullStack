//events and event emmiter in nodejs

const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter();
let k = 0;
event.on('countAPI', () =>
{
    k++;
    console.log('event called', k);
});

app.get('/', (req, res) =>
{
    res.send('working well');
    event.emit('countAPI')
});

app.listen(80);