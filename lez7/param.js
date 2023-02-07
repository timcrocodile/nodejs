const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/:id", (req, res) => {
  res.send(`l'id indicato è ${req.params.id}`);
});

app.get("/users/:name/:id", (req, res) => {
  res.send(`l'utente con id ${req.params.id} si chiama  ${req.params.name}`);
  //   res.send(`${req.params.id}`);
});

app.get("/users/:valore", (req, res) => {
  res.send(`valore = ${req.params.valore}`);
});

//regex
app.get("/login/:id([0-9]{4})", (req, res) => {
  res.send(`id ${req.params.id} inserito è lungo 4 caratteri`);
});

app.listen(PORT, () => {
  console.log(`server attivo su porta ${PORT}`);
});
