const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const hashedPw = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPw });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send("Error creating user");
    console.error(error);
  }
});

router.get("/getuser/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send("Error retreiving users");
  }
});

/**
 * for debugging
 */
router.get("/getusers", async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).send("Error retreiving users");
  }
});

module.exports = router;
