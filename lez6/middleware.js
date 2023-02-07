const express = require("express");
const logger = require("./logger");
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

app.get("/contatti", logger, (req, res) => {
  res.send("contattami");
});

app.listen(3000, () => {
  console.log(`Server in ascolto sulla porta : $constante`);
});
