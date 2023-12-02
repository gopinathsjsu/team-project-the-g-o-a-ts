const mongoose = require("mongoose");

const analyticSchema = new mongoose.Schema({
  theaterId: String,
  date: Date,
  totalOccupancy: Number,
  revenue: Number,
  showtimeStats: String, // array
});

module.exports = mongoose.model("Analytic", analyticSchema);
