const http = require("http");
const utenti = require("./utenti");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(utenti));
});

const callback = () => {
  const address = server.address().address;
  const port = server.address().port;
  console.log(`chiamblaia shimalaya http://${address}:${port}`);
};

server.listen(8000, "localhost", callback);

console.log(utenti);
