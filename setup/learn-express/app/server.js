import http from "http";

//var http = require("http");

const hostname = "127.0.0.1";

const port = 3000;

export const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server is running http://${hostname}:${port}/`);
});