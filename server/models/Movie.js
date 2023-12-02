const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: String,
  genre: String,
  director: String,
  cast: String,
  releaseDate: Date,
});

module.exports = mongoose.model("Movie", movieSchema);
