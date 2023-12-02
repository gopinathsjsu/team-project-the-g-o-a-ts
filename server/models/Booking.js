const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: String,
  showtimeId: String,
  seatsBooked: String, // Array of seats
  totalPrice: Number,
  serviceFee: Number,
  status: { type: String, enum: ["Confirmed", "Cancelled"] },
  bookingTime: Date,
});

module.exports = mongoose.model("Booking", bookingSchema);
