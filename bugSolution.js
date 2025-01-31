const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, ');
  res.write('world!');
  res.end(); // Call res.end() after all writes
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});