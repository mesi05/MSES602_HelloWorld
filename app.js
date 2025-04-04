const http = require('http');

const hostname = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res) => {
	  console.log(`${req.method} ${req.url}`); // To Log each request
	  res.statusCode = 200;
	  res.setHeader('Content-Type', 'text/plain');
	  res.end('Hello World. My name is William (Bill) Masters');
});

server.listen(port, hostname, () => {
	  console.log(`Server running at http://${hostname}:${port}/`);
});

