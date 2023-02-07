const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === "simona") {
    req.user = { name: "simona" };

    next();
  } else {
    console.log(user);
    res.status(401).send(`utente ${user} non è autorizzato`);
  }
};

module.exports = authorize;
