const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const user = new User({ ...req.body });
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
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
  } catch (error) {
    res.status(500).send("Error retreiving users");
  }
});

router.post("/login", async (req, res) => {
  try {
    const username = req.body.email;
    const password = req.body.password;
    const users = await User.find();
    const user = users.filter(
      (u) => u.email == username && u.password == password
    );
    console.log(user);
    if (user.length <= 0) {
      res.status(500).send("Could not find user");
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).send("Could not find user");
    console.error(error);
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
