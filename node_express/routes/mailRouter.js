const express = require('express');
const  bodyParser = require('body-parser');

const mailsRouter = express.Router();

mailsRouter.use(bodyParser.json());

mailsRouter.route('/')
.all((req, res, next) =>{
    res.statusCode = 200 ;
    res.setHeader('Content-type', 'text/html');
    next();
})
.get((req, res, next)=>{
    res.end('all emails');
});

module.exports = mailsRouter;    