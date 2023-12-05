import React, { useState, useEffect } from "react";
import { addShowtime, getCurrentMovies, getAllTheaters } from "../../common/apiUtils";
import { Button, Container, TextField, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddShowtime = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newShowtime, setNewShowtime] = useState({
    movieId: "",
    theaterId: "",
    screenNumber: "",
    startTime: "",
    price: "",
    discountPrice: "",
  });

  useEffect(() => {
    // Fetch all movies and theaters
    const fetchOptions = async () => {
      const moviesData = await getCurrentMovies();
      const theatersData = await getAllTheaters();
      setMovies(moviesData);
      setTheaters(theatersData);
    };
    fetchOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShowtime({ ...newShowtime, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !newShowtime.movieId ||
      !newShowtime.theaterId ||
      !newShowtime.screenNumber ||
      !newShowtime.startTime ||
      !newShowtime.price ||
      !newShowtime.discountPrice
    ) {
      alert("All fields are required.");
      return;
    }

    // Validate the screen number against the selected theater
    const selectedTheater = theaters.find((theater) => theater._id === newShowtime.theaterId);
    if (selectedTheater && (newShowtime.screenNumber > selectedTheater.screens || newShowtime.screenNumber <= 0)) {
      alert(
        `This theater only has ${selectedTheater.screens} screens available. Please choose from 1 to ${selectedTheater.screens}`
      );
      return;
    }

    // Validate that the start time is not before today
    const selectedDateTime = new Date(newShowtime.startTime);

    // Get the current date and time
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
      alert("The start time cannot be in the past.");
      return;
    }

    try {
      await addShowtime({
        ...newShowtime,
        screenNumber: Number(newShowtime.screenNumber),
        price: Number(newShowtime.price),
        discountPrice: Number(newShowtime.discountPrice),
      });
      setShowSuccess(true);
      setTimeout(() => navigate("/editor"), 1750);
    } catch (error) {
      console.error("Failed to add showtime:", error);
    }
  };

  return (
    <div>
      <Container maxWidth={"md"}>
        <h2 style={{ marginTop: "1em", marginBottom: "1em" }}>Add New Showtime</h2>
        <form onSubmit={handleSubmit}>
          {/* Movie Dropdown */}
          <FormControl fullWidth style={{ marginBottom: "1em" }}>
            <InputLabel id="movie-label">Movie</InputLabel>
            <Select
              labelId="movie-label"
              id="movie-select"
              value={newShowtime.movieId}
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

          <FormControl fullWidth style={{ marginBottom: "1em" }}>
            <InputLabel id="theater-label">Theater</InputLabel>
            <Select
              labelId="theater-label"
              id="theater-select"
              value={newShowtime.theaterId}
              label="Theater"
              onChange={handleInputChange}
              inputProps={{ name: "theaterId" }}
            >
              {theaters.map((theater) => (
                <MenuItem key={theater._id} value={theater._id}>
                  {theater.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Screen Number Input */}
          <TextField
            label="Screen Number"
            variant="outlined"
            type="number"
            name="screenNumber"
            value={newShowtime.screenNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          {/* Start Time Input */}
          <TextField
            label="Start Time"
            variant="outlined"
            type="datetime-local"
            name="startTime"
            value={newShowtime.startTime}
            onChange={handleInputChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
          />

          {/* Price Input */}
          <TextField
            label="Price"
            variant="outlined"
            type="number"
            name="price"
            value={newShowtime.price}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          {/* Discount Price Input */}
          <TextField
            label="Discount Price (< 6PM or on Tuesdays)"
            variant="outlined"
            type="number"
            name="discountPrice"
            value={newShowtime.discountPrice}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            style={{ marginBottom: "2em" }}
          />
          {showSuccess ? (
            <Button variant="contained" style={{ backgroundColor: "#4caf50", color: "white", opacity: 0.5 }} disabled>
              Success!
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Add Showtime
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default AddShowtime;
