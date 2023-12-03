require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const db = process.env.ATLAS_URI;

// Routes
const usersRoute = require("./routes/userRoute");
app.use("/users", usersRoute);

const theatersRoute = require("./routes/theaterRoute");
app.use("/theaters", theatersRoute);

const bookingsRoute = require("./routes/bookingRoute");
app.use("/bookings", bookingsRoute);

const moviesRoute = require("./routes/movieRoute");
app.use("/movies", moviesRoute);

const showtimesRoute = require("./routes/showtimeRoute");
app.use("/showtimes", showtimesRoute);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}`));
