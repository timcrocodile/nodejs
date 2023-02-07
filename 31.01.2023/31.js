const http = require("http");
// const { brotliDecompressSync } = require("zlib")

let server = http.createServer(function (req, res) {
  // 200 è lo status che indica il successo della richiesta / risposta
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      "<title>" +
      "home-page" +
      "</title>" +
      "</head>" +
      "<body>" +
      " <h1>ciao</h1>" +
      "</body>" +
      "</html>"
  );
  res.end();
});

server.listen(8080);
