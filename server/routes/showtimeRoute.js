const express = require("express");
const router = express.Router();
const Showtime = require("../models/Showtime");

router.post("/createshowtime", async (req, res) => {
  try {
    const showtime = new Showtime({ ...req.body });
    await showtime.save();
    res.status(201).send("Showtime created successfully");
  } catch (error) {
    res.status(500).send("Error creating showtime");
    console.error(error);
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    const showtimeUpdated = await Showtime.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!showtimeUpdated) {
      return res.status(404).send("Could not find showtime with id");
    }
    res.json(showtimeUpdated);
  } catch (error) {
    res.status(500).send("Error retreiving showtimes");
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const deleted = await Showtime.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).send("Successfully deleted");
    } else {
      res.status(500).send("Could not delete showtime");
    }
  } catch (error) {
    res.status(500).send("Server error deleting");
  }
});

router.get("/getshowtime/:id", async (req, res) => {
  try {
    const showtime = await Showtime.findById(req.params.id);
    if (!showtime) {
      return res.status(404).send("Could not find showtime with id");
    }
    console.log(showtime);
    res.json(showtime);
  } catch (error) {
    res.status(500).send("Error retreiving showtimes");
  }
});

router.get("/getshowtimes", async (req, res) => {
  try {
    const showtimes = await Showtime.find();
    console.log(showtimes);
    res.json(showtimes);
  } catch (error) {
    res.status(500).send("Error retreiving showtimes");
  }
});

module.exports = router;
