const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const hashedPw = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPw });
    await user.save();
    res.status(201).send("User created successfully");
    next();
  } catch (error) {
    res.status(500).send("Error creating user");
    console.log(req.body);
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).send("Error retreiving users");
  }
});

module.exports = router;
