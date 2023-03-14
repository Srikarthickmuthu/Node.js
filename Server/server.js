const http = require("http");
// require('./file.env').config();
const hostname = "127.0.0.1";
const port = 3000;
setTimeout(() => {
  console.log("server terminated");
  process.exit(1);
}, 3000);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log(process.env.USER_ID);
console.log(process.env.NODE_ENV);
setTimeout(() => {
  console.log("server terminated");
  process.exit(1);
}, 3000);
