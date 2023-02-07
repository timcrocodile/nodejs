const express = require("express");

const path = require("path");

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("home page"); //send gestisce la semplice stringa
});

app.get("/contatti", (req, res) => {
  res.send("pagina contatti");
});

app.get("/json", (req, res) => {
  // res.json gestisce automaticamente la corretta lettura di json
  res.json({
    nome: "fabio",
  });
});

//gestisco un file html

app.get("/benvenuto", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.get("*", (req, res) => {
  res.send("404 | page nottt found");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
