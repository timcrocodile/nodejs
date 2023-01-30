// metodo require() => richiamo il modulo built-in
const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("home");
  if (req.url === "/pagina1") res.end("hello world");
  else if (req.url === "/pagina2") res.end("pagina2");
  else if (req.url === "/pagina3") res.end("pagina3");
  //404
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(8000);
