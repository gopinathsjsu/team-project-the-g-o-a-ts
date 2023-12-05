const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userName: String,
  userEmail: String,
  showtimeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Showtime",
    required: true,
  },
  seatsBooked: {
    type: [Number],
    required: true,
  }, // Array of seats '2' '1' '3' etc.
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Confirmed", "Cancelled"],
    default: "Confirmed",
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  bookingTime: { type: Date, required: true, default: Date.now() },
});

module.exports = mongoose.model("Booking", bookingSchema, "bookings");
