const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    //Build file path
    let filepath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html': req.url
        );

    //extention of file
    let extname = path.extname(filepath);

    //initial content type
    let contentType = 'text/html';

    //check ext ans set contentType
    switch(extname){
        case '.js':
        contentType = 'text/javascript';
        break;
        case '.css':
        contentType = 'text/css';
        break;
        case '.json':
        contentType = 'text/json';
        break;
        case '.png':
        contentType = 'text/png';
        break;
        case '.jpg':
        contentType = 'text/jpg';
        break;
    }

    //Readfile

    fs.readFile(filepath,(err, content) => {

        if(err){
            if (err.code == 'ENOENT'){
                // file not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
                    res.writeHead(200, {'Content-Type': contentType});
                    res.end(content,'utf8');
                });
            }
            else{
                // some server error
                res.writeHead(500);
                res.end(`Server Error : ${err.code}`);

            }
        }
        else{
            //Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content,'utf8');

        }
    });
});



const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log(`Server running on port ${PORT}`));
