const http = require('http');
const fs = require('fs');
const url = require('node:url');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url ===  '/' || req.url === '/index.html') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })

    }
    else if (req.url == '/index.css') {
        fs.readFile('index.css', function (err, data) {
            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          });
    }
    else if (req.url === '/contact-me.html') {
        fs.readFile('contact-me.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if (req.url == '/contact.css') {
        fs.readFile('contact.css', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          });
    }
    else if (req.url === '/about.html') {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if (req.url == '/about.css') {
        fs.readFile('about.css', function (err, data) {
            console.log('Reading css');
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          });
    }
    else if (req.url == '/404.css') {
        fs.readFile('404.css', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
          });
    }
    else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        })
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  })