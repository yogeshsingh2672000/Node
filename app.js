const { Socket } = require("dgram");
const http = require("http");

const server = http.createServer((req, res) => {
  if (res.url == "/") {
    res.write("Hello World");
    res.end();
  }
});

server.listen(5510);

console.log("Listening on port 5510");
