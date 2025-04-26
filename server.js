const http = require('http')
const fs = require('fs')
const _ = require('lodash');


// Server Creation

// const server = http.createServer((req, res) => {
//     // console.log("Request Received");
//     console.log(req.url, req.method);

//     // content reading 

//     // res.setHeader('Content-Type', 'text/plain');
//     res.setHeader('Content-Type', 'text/html');
//     // res.write('Hello World\n');
//     res.write('<h1>Hello World</h1>');
//     res.write('<p>This is a test</p>');
//     res.end();
//     // res.end('Hello World\n');
    
// });

// best way to read from file

const server = http.createServer((req, res) => {
    // console.log("req.url", req.method);
    // Loadash
    const num = _.random(1, 100);
    console.log(num);

    const greet = _.once(() => {
        console.log(`Hello World ${num}`);
    });

    greet();
    greet();
    
    // Raw Code with out lodash

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += 'invalid.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        }   
        else {
            res.write(data)
            res.end()
        }
    })
});
server.listen(3000, 'localhost' , () => {
    console.log("Server Started on localhost 3000 port")
});