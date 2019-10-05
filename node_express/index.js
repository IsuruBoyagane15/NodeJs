const express = require('express');
const http =  require('http');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mailsRouter = require('./routes/mailRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
// app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());

app.use('/mails', mailsRouter);


// static route
// app.use((req, res, next) =>{
//     console.log(req.headers);
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.end('<html><body><h1>This is express talkMail</h1></body></html>');
// });

app.all('/mails',(req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    // res.end('all emails');
    console.log(res.headers);
    next();
});

app.get('/mails/:mailId', (req,res,next) => {
    res.end(req.params.mailId);
});

app.post('/mails', (req,res,next) => {
    res.end(req.body.mailId + " is posted by " + req.body.sent);
});


var server = http.createServer(app, () =>{
    console.log(`server is running on ${hostname}:${port}`);
});
server.listen(port, hostname)