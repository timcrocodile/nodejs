const express = require("express");

// const path = require("path");

const app = express();

const PORT = 8080;
//uso il metodo static che è il middleware per la gestione delle risorse statiche
//use introduce l'usi dei middlewares
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.send("home page");
  res.sendFile(__dirname + "public/index.html");
});

app.get("/contatti", (req, res) => {
  //res.send("home page");
  res.sendFile(__dirname + "public/contatti.html");
});

app.get("/servizi", (req, res) => {
  //res.send("home page");
  res.sendFile(__dirname + "public/servizi.html");
});

// app.get("/contatti", (req, res) => {
//   res.send("pagina contatti");
// });

// app.get("/json", (req, res) => {

//   res.json({
//     nome: "fabio",
//   });
// });

// app.get("/benvenuto", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "index.html"));
// });

app.get("*", (req, res) => {
  res.send("404 | page nottt found");
  console.log(res);
});

app.listen(PORT, () => {
  console.log(`server attivo su ${PORT}`);
});
