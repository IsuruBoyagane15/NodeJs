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
    res.end('Will send all the promotions to you!');
})
.post('/' , (req, res, next) => {
    res.end('Will add the promoiton: ' + req.body.name + ' with details: ' + req.body.description);
})
.put('/' , (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete('/', (req, res, next) => {
    res.end('Deleting all promotions');
});

promoRoute.all('/:promoId', (req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'plain, text');
    next();
})
.get('/:promoId', (req, res, next)=>{
    res.end(`This is the promoiton with ID = ${req.params.promoId}.`);
})
.post('/:promoId', (req, res, next)=>{
    res.statusCode = 403;
    res.end('POST operation not supported on /promotions/'+ req.params.promoId);
})
.put('/:promoId' , (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete('/:promoId', (req, res, next) => {
    res.end('Deleting  promotion ' + req.params.promoId);
});

module.exports = promoRoute;