const http = require('http');

const server = http.createServer((req, res) => {
  // The error is here: Incorrect use of res.end()
  res.end();
  res.write('Hello, world!'); // This line will never be executed
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});