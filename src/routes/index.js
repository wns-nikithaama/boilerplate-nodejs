const express = require("express");
const router = express.Router();

const { indexController } = require("../controller/indexController");

router.route("/").get(indexController.index);

router.use("/users", require("./users"));

module.exports = router;
