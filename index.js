const http = require("http");

console.log("server running");
http
  .createServer((req, res) => {
    var output = "<h1>Hello Yogesh</h1>";
    res.write(output);
    res.end();
  })
  .listen(4500);
