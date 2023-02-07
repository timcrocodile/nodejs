const express = require("express");
const logger = require("./logger");
const authorize = require("./auth");

const app = express();

//app.use(logger);

app.get("/", (req, res) => {
  res.send("home");
});

app.get("about", (req, res) => {
  res.send("ciao a tutti");
});

//costante da dichiarare

//middleware richiamato come parametro e richiamato solo sulla rotta contatti

app.get("/contatti", (req, res) => {
  res.send("contattami");
});

app.get("./api/products", authorize, (req, res) => {
  res.send("pagina prodotti");
  console.log(req.user);
});

app.get("/api/products", [logger, authorize], (req, res) => {
  res.send("pagina prodotti");
  console.log(req.user);
});

app.listen(3000, () => {
  console.log(`Server in ascolto sulla porta : $constante`);
});
