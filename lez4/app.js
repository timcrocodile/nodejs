const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      //   let html = fs.readFileSync(`${dir_name}/index.html`)
      let html = fs.readFileSync("index.html");
      res.end(html);
    } else if (req.url === "/api/user") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const user = JSON.stringify({
        name: "simona",
        cognome: "tocci",
      });
      res.end(user);
    } else {
      res.writeHead(404);
      res.end("not found");
    }
  })
  .listen(8181);

console.log("server attivo");
