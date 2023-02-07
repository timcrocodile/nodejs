const http = require("http");
const os = require("os");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

let messaggio = `<!doctype html>
<html>
<head>


</head>
<body>
l'utente <b> ${utente.username} </b>  ha avviato l'app il giorno 
<b> ${data.getDate()}/${data.getMonth()}/${data.getFullYear()}} usando la piattaforma : ${piattaforma}</b>
</body>

</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
});

server.listen(3001);
console.log(messaggio);
