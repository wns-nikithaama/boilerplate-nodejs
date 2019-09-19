const express = require("express");
const router = express.Router();

const { User } = require("../app/models");

router.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get("/find/:id", (req, res) => {
  res.json("Im in register");
});

router.get("/findall", (req, res) => {
  res.json("Im in Find All");
});

router.put("/update/:id", (req, res) => {
  res.json("Im in update");
});

router.delete("/delete/:id", (req, res) => {
  res.json("Im in delete");
});

module.exports = router;
