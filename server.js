// const http = require('http')

// const PORT = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   if (req.url === '/') return respondHello(req, res)

//   res.end()
// })

// function respondHello (req, res) {
//   res.end(JSON.stringify({ msg: 'hello' }))
// }

// server.listen(PORT)
// console.log(`Server listening on port ${PORT}`)

// if (require.main !== module) module.exports = server
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'hello' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
