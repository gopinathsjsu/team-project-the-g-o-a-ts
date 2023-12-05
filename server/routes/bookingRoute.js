const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/createbooking", async (req, res) => {
  try {
    const booking = new Booking({ ...req.body });
    await booking.save();
    res.status(201).send("Booking created successfully");
  } catch (error) {
    res.status(500).send("Error creating booking");
    console.error(error);
  }
});

router.get("/getbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    console.log(bookings);
    res.json(bookings);
  } catch (error) {
    res.status(500).send("Error retreiving bookings");
  }
});

router.delete("/remove/:id", async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).send("Successfully deleted");
    } else {
      res.status(500).send("Could not delete booking");
    }
  } catch (error) {
    res.status(500).send("Server error deleting");
  }
});

module.exports = router;
