require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json);
app.use(express.urlencoded({ extended: true }));
const db = process.env.ATLAS_URI;

// Routes
const usersRoute = require("./routes/userRoute");
app.use("/api/users", usersRoute);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
