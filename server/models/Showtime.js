const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing
    ref: "Movie", // Reference the Movie model
    required: true,
  },
  theaterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theater",
    required: true,
  },
  screenNumber: { type: Number, required: true },
  startTime: { type: Date, required: true },
  price: { type: Number, required: true },
  discountPrice: Number,
  seatsBooked: {
    type: [Number],
    default: [],
  },
});

module.exports = mongoose.model("Showtime", showtimeSchema, "showtimes");
