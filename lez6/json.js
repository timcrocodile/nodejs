const express = require("express");
const { products } = require("./data");

const app = express();

const PORT = 5000;

app.get("/json", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.send(
    `<h1>sei nell/'home page</h1><a href="">vai alla pagina prodotti</a>`
  );
});

//recupera solo alcuni elementi dalla totalità degli oggetti
app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, title, brand } = product;
    return { id, title, brand };
  });
  res.json(newProduct);
});

//api/products/3
app.get("/api/products/:productsId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("L articolo non esiste");
  }
  return res.json(singleProduct);
});

//la dimostrazione del percorso che è esattamente riconosciuto solo negli elementi impostati
app.get("/api/products/:productId/:comments/:commentsId", (req, res) => {
  console.log(req.params);
  res.send("che bell/'oggetto");
});

//impostazioni del percorso dell'end point della mia API = api/v1/query?search=
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let filterProduct = [...products];

  if (search) {
    filterProduct = filterProduct.filter((product) => {
      return product.title.startsWith(search);
    });
    if (limit) {
      filterProduct = filterProduct.slice(0, limit);
    }

    if (filterProduct.length < 1) {
      return res.status(200).json({ success: true, data: [] });
    }
  }
  res.status(200).json(filterProduct);
});

app.listen(PORT, () => {
  console.log(`server ascolta sulla ${PORT}`);
});
