// Require the http module
const http = require('http');
const fs = require('fs');

// Create an HTTP server and listen on port 80
const server = http.createServer((req, res) => {
    // Read the HTML file
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
            return;
        }

        // Send the HTML content as the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

// Listen on port 80
server.listen(80, () => {
    console.log('Server running on http://localhost:80/');
});

