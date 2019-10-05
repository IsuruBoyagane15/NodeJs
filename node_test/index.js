const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostName = 'localhost';
const port = 3000;

var app = express();
app.use(bodyParser.json());
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

dishRouter.all('/', (req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/', (req, res, next) => {
    res.end('Will send all the dishes to you!');
})
.post('/' , (req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put('/' , (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete('/', (req, res, next) => {
    res.end('Deleting all dishes');
});

var server = http.createServer(app, () =>{
    console.log(`server running on ${hostName} ${port}`);
});

server.listen(port, hostName);