const http = require(`http`); //creato oggetto

//crea percorsi server
let server = http.createServer(function (req, res) {
  //200 è lo status che indica il successo della richiesta|risposta
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<title>" +
      "Hopage" +
      "</title>" +
      "</head>" +
      "<body>" +
      "<h1>Quesmia app</h1>" +
      "</body>" +
      "</html>"
  );

  res.end();
});

server.listen(8080);
