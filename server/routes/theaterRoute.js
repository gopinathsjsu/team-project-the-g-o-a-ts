const express = require("express");
const router = express.Router();
const Theater = require("../models/Theater");

router.post("/createtheater", async (req, res) => {
  try {
    const theater = new Theater({ ...req.body });
    await theater.save();
    res.status(201).send("Theater created successfully");
  } catch (error) {
    res.status(500).send("Error creating theater");
    console.error(error);
  }
});

/**
 * for debugging
 */
router.get("/gettheaters", async (req, res) => {
  try {
    const theaters = await Theater.find();
    console.log(theaters);
    res.json(theaters);
  } catch (error) {
    res.status(500).send("Error retreiving theaters");
  }
});

module.exports = router;
