// http
const http = require("http");

// 1. create server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hey, this is an HTML file</h1>");
});

// 2. running the created server
server.listen(3000);
