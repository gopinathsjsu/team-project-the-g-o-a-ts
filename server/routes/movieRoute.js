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

router.get("/getfuturemovies", async (req, res) => {
  try {
    const movies = await Movie.find();
    const futureMovies = movies.filter((movie) => movie.currentlyShowing == false);
    console.log(futureMovies);
    res.json(futureMovies);
  } catch (error) {
    res.status(500).send("Error retreiving movies");
  }
});

router.get("/getcurrentmovies", async (req, res) => {
  try {
    const movies = await Movie.find();
    const currentMovies = movies.filter((movie) => movie.currentlyShowing == true);
    console.log(currentMovies);
    res.json(currentMovies);
  } catch (error) {
    res.status(500).send("Error retreiving movies");
  }
});

router.get("/getmovies", async (req, res) => {
  try {
    const movies = await Movie.find();
    console.log(movies);
    res.json(movies);
  } catch (error) {
    res.status(500).send("Error retreiving movies");
  }
});

router.get("/getmovies/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
  } catch (error) {
    res.status(500).send("Error retreiving movies");
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const updatedData = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, updatedData, { new: true });
    if (!updatedMovie) {
      return res.status(404).send("Movie not found");
    }
    res.json(updatedMovie);
  } catch (error) {
    res.status(500).send("Error retreiving movies");
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (deleted) {
      res.status(200).send("Successfully deleted");
    } else {
      res.status(500).send("Could not delete movie");
    }
  } catch (error) {
    res.status(500).send("Server error deleting");
  }
});


module.exports = router;
