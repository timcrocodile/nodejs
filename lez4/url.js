const http = require("http");
const url = require("url");
const querystring = require("querystring");

let server = http
  .createServer(function (req, res) {
    let page = url.parse(req.url).pathname;
    console.log(page);

    let queryStr = url.parse(req.url).query;
    console.log(queryStr);

    res.writeHead(200, { "Content-Type": "text/plain" });

    let params = querystring.parse(queryStr);
    if (params["nome"]) {
      res.write(`il tuo nome è ${params["nome"]}\n`);
    }

    if (params["cognome"]) {
      res.write(`il tuo cognnome è ${params["cognome"]}\n`);
    }

    if (page === "/") {
      res.write("sei nel home");
    } else if (page === "/utente") {
      res.write("sei nell'utente");
    } else {
      res.write("not found");
    }
    res.end();
  })
  .listen(8081);
