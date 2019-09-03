const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const { name, port } = require("../package.json");
const cors = require("cors");
const { erroController } = require("./controller/erroHandlerController");
const authenticated = require("./middlewares/authenticated");
const app = express();

// server config
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.use(methodOverride("_method"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/users", authenticated);

// instancia todas as rotas
app.use("/", require("./routes"));

// erro handling
app.use(erroController.RouteNotFound);

const server = app.listen(port, () => {
  // inicia o websocket com o mesmo ip e porta que a api
  const io = require("socket.io")(server, {
    cookie: false,
  });

  console.log(`${name} listening on port ${port}!`);

  // conexões do websocket
  io.on("connection", require("./controller/webSocketController"));
});
