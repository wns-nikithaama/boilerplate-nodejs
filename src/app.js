const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = require("./swaggerOptions");
const authenticated = require("./app/middlewares/authenticated");
const { erroController } = require("./app/controller/erroHandlerController");

require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
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
    this.express.use(
      "/docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerJsDoc(swaggerOptions))
    );
    this.express.use(require("./routes"));
    this.express.use(erroController.RouteNotFound);
  }
}

module.exports = new AppController().express;
