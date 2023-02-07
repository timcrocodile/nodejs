// const { Socket } = require("dgram");
const net = require("net");

const HOSTNAME = "localhost";
const PORT = 5000;

net
  .createServer((Socket) => {
    console.log(`server connesso a porta ${PORT}`);
    Socket.on("data", (name) => {
      Socket.write(`Ciao ${name}!`);
    });
  })
  .listen(PORT, HOSTNAME);
