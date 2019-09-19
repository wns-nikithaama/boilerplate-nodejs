const app = require("./app");
const { name } = require("../package.json");

const server = app.listen(process.env.PORT || 3000, () => {
  const address = server.address();
  const io = require("socket.io")(server, {
    cookie: false,
  });

  console.log(`${name} listening on port ${address.port}!`);

  // conexões do websocket
  io.on("connection", require("./app/controller/webSocketController"));
});
