const http = require("http");
const myModule = require("./myModule");

let server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("server avviato");
});

server.listen(5000);

myModule.sayHello();
