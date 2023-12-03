const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.post("/createmovie", async (req, res) => {
  try {
    const movie = new Movie({ ...req.body });
    await movie.save();
    res.status(201).send("Movie created successfully");
  } catch (error) {
    res.status(500).send("Error creating movie");
    console.error(error);
  }
});

/**
 * for debugging
 */
router.get("/getmovies", async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.json(movies);
  } catch (error) {
    res.status(500).send("Error retreiving movies");
  }
});

module.exports = router;
