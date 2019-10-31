const express = require("express");
const router = express();

/**
 * @swagger
 * servers:
 *  url: /
 */
router.use("/users", require("./users"));

module.exports = router;
