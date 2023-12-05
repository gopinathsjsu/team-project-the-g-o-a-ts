const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true },
  genre: { type: String, required: true },
  director: { type: String, required: true },
  cast: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  imageUrl: { type: String, required: true },
  currentlyShowing: { type: Boolean, required: true },
});

module.exports = mongoose.model("Movie", movieSchema, "movies");
