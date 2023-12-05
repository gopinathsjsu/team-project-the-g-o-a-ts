import React, { useState } from "react";
import { addMovie } from "../../common/apiUtils";
import { Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    duration: "",
    genre: "",
    director: "",
    cast: "",
    releaseDate: new Date(),
    imageUrl: "",
    currentlyShowing: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({ ...newMovie, [name]: name === "currentlyShowing" ? e.target.checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !newMovie.title ||
      !newMovie.description ||
      !newMovie.duration ||
      !newMovie.genre ||
      !newMovie.director ||
      !newMovie.cast ||
      !newMovie.releaseDate ||
      !newMovie.imageUrl
    ) {
      alert("All fields are required.");
      return;
    }
    try {
      await addMovie(newMovie);
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/editor");
      }, 1750);
    } catch (error) {
      console.error("Failed to add theater:", error);
    }
  };

  return (
    <div>
      <Container maxWidth={"md"}>
        <h2 style={{ marginTop: "1em", marginBottom: "1em" }}>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Title"
              variant="standard"
              type="text"
              name="title"
              value={newMovie.title}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <TextField
              label="Description"
              variant="standard"
              type="text"
              name="description"
              value={newMovie.description}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <TextField
              label="Duration"
              variant="standard"
              type="text"
              name="duration"
              value={newMovie.duration}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <TextField
              label="Genre"
              variant="standard"
              type="text"
              name="genre"
              value={newMovie.genre}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <TextField
              label="Director"
              variant="standard"
              type="text"
              name="director"
              value={newMovie.director}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>
          <div>
            <TextField
              label="Cast"
              variant="standard"
              type="text"
              name="cast"
              value={newMovie.cast}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>

          <div>
            <TextField
              label="Image URL"
              variant="standard"
              type="text"
              name="imageUrl"
              value={newMovie.imageUrl}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>
          <TextField
            label="Release Date"
            variant="standard"
            type="date"
            name="releaseDate"
            value={newMovie.releaseDate}
            onChange={handleInputChange}
            style={{ width: "80%" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Currently Showing"
            variant="standard"
            type="checkbox"
            name="currentlyShowing"
            checked={newMovie.currentlyShowing}
            onChange={handleInputChange}
            style={{ width: "80%", marginTop: "20px" }}
          />
          {showSuccess ? (
            <Button variant="contained" style={{ backgroundColor: "#4caf50", color: "white", opacity: 0.5 }} disabled>
              Success!
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Add Movie
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default AddMovie;
