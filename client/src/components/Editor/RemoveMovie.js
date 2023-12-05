import React, { useState, useEffect } from "react";
import {
    getAllMovies,
    removeMovie,
} from "../../common/apiUtils";
import { Button, Container, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

/*
TODO: Handle empty dropdown
*/

const RemoveMovie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteMovie, setDeleteMovie] = useState({
    movieId: ""
  })

  useEffect(() => {
    // Fetch all movies and theaters
    const fetchOptions = async () => {
      const moviesData = await getAllMovies();
      setMovies(moviesData);
    };
    fetchOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeleteMovie({ ...deleteMovie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("deleted movie: ", deleteMovie)
        await removeMovie(deleteMovie.movieId);
        setShowSuccess(true);
        setTimeout(() => navigate("/editor"), 1750);
    } catch (error) {
        console.error("Failed to delete movie:", error)
    }
  };

  return (
    <div>
      <Container maxWidth={"md"}>
        <h2 style={{ marginTop: "1em", marginBottom: "1em" }}>Remove Movie</h2>
        <form onSubmit={handleSubmit}>
          {/* Movie Dropdown */}
          <FormControl fullWidth style={{ marginBottom: "1em" }}>
            <InputLabel id="movie-label">Movie</InputLabel>
            <Select
              labelId="movie-label"
              id="movie-select"
              value={deleteMovie.movieId}
              label="Movie"
              onChange={handleInputChange}
              inputProps={{ name: "movieId" }}
            >
              {movies.map((movie) => (
                <MenuItem key={movie._id} value={movie._id}>
                  {movie.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {showSuccess ? (
            <Button variant="contained" style={{ backgroundColor: "#4caf50", color: "white", opacity: 0.5 }} disabled>
              Success!
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Remove Movie
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default RemoveMovie;
