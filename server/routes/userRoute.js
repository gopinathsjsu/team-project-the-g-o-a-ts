const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "../config.env" });

const authenticateToken = require("../common/authenticateToken");

/* For protected routes */
// const authenticateToken = require('./authMiddleware');

// // Use the middleware in your routes
// router.get('/protected', authenticateToken, (req, res) => {
//     // Protected route logic
// });

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
    const user = await User.findOne({ email: username, password: password });
    console.log(user);
    if (user) {
      const userJWT = { id: user.id, name: user.name, email: user.email };
      const accessToken = jwt.sign(userJWT, process.env.JWT_SECRET, { expiresIn: "1h" });
      res.json({ accessToken });
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.put("/edit/:id", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
    if (!updatedUser) {
      return res.status(401).send("User not found");
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user: ", error);
    res.status(500).send("Internal server error");
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
