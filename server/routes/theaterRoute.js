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


router.put("/update/:id", async (req, res) => {
  try {
    const theaterUpdated = await Theater.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!theaterUpdated) {
      return res.status(404).send("Could not find theater with id");
    }
    res.json(theaterUpdated);
  } catch (error) {
    res.status(500).send("Error retreiving theaters");
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const deleted = await Theater.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).send("Successfully deleted");
    } else {
      res.status(500).send("Could not delete theater");
    }
  } catch (error) {
    res.status(500).send("Server error deleting");
  }
});

module.exports = router;
