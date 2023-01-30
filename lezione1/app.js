// metodo require() => richiamo il modulo built-in
const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("home");
  if (req.url === "/") res.end("hello world");
  else if (req.url === "/ospite") res.end("hello visitor");
  else if (req.url === "/ciao") res.end("hello");
  //404
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(3000);
