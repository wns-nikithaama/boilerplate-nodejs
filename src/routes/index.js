const express = require("express");
const router = express.Router();

const { indexController } = require("../app/controller/indexController");

// const { User } = require("../models");

// User.create({
//   name: "Bruno",
//   email: "bruno@teste.com.br",
//   password: "1234",
// });

router.route("/").all(indexController.index);

router.use("/users", require("./users"));

module.exports = router;
