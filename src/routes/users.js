const express = require("express");
const router = express.Router();

const { User } = require("../app/models");

// Routes
/**
 * @swagger
 * /register:
 *  post:
 *    description: Use this to create a new user
 *    responses:
 *      '200':
 *        description: A successful response
 *    tags: [Users]
 */
router.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

/**
 * @swagger
 * /find/{id}:
 *  get:
 *    description: Use this to get a user
 *    responses:
 *      '200':
 *        description: A successful response
 *    tags: [Users]
 */
router.get("/find/:id", (req, res) => {
  res.json("Im in register");
});

/**
 * @swagger
 * /findall:
 *  get:
 *    description: Use this to get all users
 *    responses:
 *      '200':
 *        description: A successful response
 *    tags: [Users]
 */
router.get("/findall", (req, res) => {
  res.json("Im in Find All");
});

/**
 * @swagger
 * /update/{id}:
 *  put:
 *    description: Use this to update a user
 *    responses:
 *      '200':
 *        description: A successful response
 *    tags: [Users]
 */
router.put("/update/:id", (req, res) => {
  res.json("Im in update");
});

/**
 * @swagger
 * /delete/{id}:
 *  delete:
 *    description: Use this to delete a user
 *    responses:
 *      '200':
 *        description: A successful response
 *    tags: [Users]
 */
router.delete("/delete/:id", (req, res) => {
  res.json("Im in delete");
});

module.exports = router;
