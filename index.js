    const http = require('http');

const hostname = '127.0.0.1';
const port = 4500;

const server = http.cnodreateServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});