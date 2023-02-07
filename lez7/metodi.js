const express = require("express");
const { people } = require("./data");
const app = express();

const PORT = 3000;

// middleware per risorse statiche
app.use(express.static("./public"));

//url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

//inviamo dati dalla nostra applicazione

app.post("/api/people", (req, res) => {
  const { id, name } = req.body;
  if (!id || !name) {
    return res.status(400).json({ success: false, msg: "nn trovo un dato" });
  }
  return res
    .status(200)
    .json({ success: true, person: { id: id, name: name } });
});

app.listen(PORT, () => {
  console.log(`server ascolta su porta ${PORT}`);
});
