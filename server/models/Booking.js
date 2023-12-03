const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  showtimeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Showtime",
    required: true,
  },
  seatsBooked: {
    type: [String],
    required: true,
  }, // Array of seats '2a' '2b' '3g' etc.
  totalPrice: {
    type: Number,
    required: true,
  },
  serviceFee: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Confirmed", "Cancelled"],
    default: "Confirmed",
  },
  bookingTime: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("Booking", bookingSchema, "bookings");
