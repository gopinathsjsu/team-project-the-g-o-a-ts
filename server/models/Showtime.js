const mongoose = require("mongoose");

const showtimeSchema = new mongoose.Schema({
  movieId: String,
  theaterId: String,
  screenId: Number,
  startTime: Date,
  endTime: Date,
  price: Number,
  discountPrice: Number,
});

module.exports = mongoose.model("Showtime", showtimeSchema);
