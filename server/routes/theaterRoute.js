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

router.get("/gettheaters", async (req, res) => {
  try {
    const theaters = await Theater.find();
    console.log(theaters);
    res.json(theaters);
  } catch (error) {
    res.status(500).send("Error retreiving theaters");
  }
});

router.get("/gettheater/:id", async (req, res) => {
  try {
    const theater = await Theater.findById(req.params.id);
    if (!theater) {
      return res.status(404).send("Could not find theater with id");
    }
    res.json(theater);
  } catch (error) {
    res.status(500).send("Error retreiving theaters");
  }
});

module.exports = router;
