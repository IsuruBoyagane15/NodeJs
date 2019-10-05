const express = require('express');
const promoRoute = express.Router();
const bodeParser = require('body-parser');

promoRoute.use(bodeParser.json());

promoRoute.all('/', (req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'plain, text');
    next();
})
.get('/', (req, res, next) => {
    res.end('Will send all the leaders to you!');
})
.post('/' , (req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put('/' , (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete('/', (req, res, next) => {
    res.end('Deleting all leaders');
});

promoRoute.all('/:leaderId', (req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'plain, text');
    next();
})
.get('/:leaderId', (req, res, next)=>{
    res.end(`This is the leader with ID = ${req.params.leaderId}.`);
})
.post('/:leaderId', (req, res, next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put('/:leaderId' , (req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete('/:leaderId', (req, res, next) => {
    res.end('Deleting  leader ' + req.params.leaderId);
});

module.exports = promoRoute;