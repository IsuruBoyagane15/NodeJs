const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());


dishRouter.all('/:dishId', (req, res, next) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get('/:dishId', (req,res,next) => {
    res.end('Will send iuo of the dish: ' + req.params.dishId +' to you!');
})
.post('/:dishId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.put('/:dishId', (req, res, next) => {
  res.write('Updating the dish: ' + req.params.dishId + '\n');
  res.end('Will update the dish: ' + req.body.name + 
        ' with details: ' + req.body.description);
})
.delete('/:dishId', (req, res, next) =>{
    res.end('Deleting  dish '+ req.params.dishId);
});

module.exports = dishRouter;