const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) =>{
    if (req.method == 'GET'){
        var file_url;
        if (req.url == '/'){
            file_url = '/index.html';
        }
        else{
            file_url = req.url;
        }
        var filePath = path.resolve('./public'+file_url);
        console.log(filePath);
        var fileExtension = path.extname(filePath);
        if (fileExtension == '.html'){
            fs.exists(filePath, (exists) =>{
                if(!exists){
                    res.stausCode = 404;
                    filePath = path.resolve('./public'+'/404.html');
                 }
                else{
                    res.stausCode = 200;
                }
                res.setHeader('Content-type', 'text/html')
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else{
            res.stausCode = 404;
            filePath = path.resolve('./public'+'/404.html');
            res.setHeader('Content-type', 'text/html')
            fs.createReadStream(filePath).pipe(res);
        }
    }
});

server.listen(port, hostname, () =>{
    console.log(`server running at http//${hostname}:${port}`);
});