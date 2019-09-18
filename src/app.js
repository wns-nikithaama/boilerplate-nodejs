const express = require("express");
const morgan = require("morgan");
const { name, port } = require("../package.json");
const cors = require("cors");
const { erroController } = require("./controller/erroHandlerController");
const authenticated = require("./middlewares/authenticated");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan("tiny"));
    this.express.use("/users", authenticated);
  }

  routes() {
    this.express.use("/", require("./routes"));
    this.express.use(erroController.RouteNotFound);
  }
}

module.exports = new AppController().express;
