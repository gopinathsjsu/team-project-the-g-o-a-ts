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

/**
 * for debugging
 */
router.get("/getbookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    console.log(bookings);
    res.json(bookings);
  } catch (error) {
    res.status(500).send("Error retreiving bookings");
  }
});

module.exports = router;
