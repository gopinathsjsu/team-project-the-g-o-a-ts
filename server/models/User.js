const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["Member", "Non-Member", "Admin"] },
  membershipType: {
    type: String,
    enum: ["Regular", "Premium", "Employee"],
    default: "Regular",
  },
  membershipStartDate: { type: Date, default: Date.now() },
  rewardsPoints: { type: Number, default: 0 },
});

module.exports = mongoose.model("User", userSchema, "users");
