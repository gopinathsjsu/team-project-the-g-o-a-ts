import React, { useState, useEffect } from "react";
import {
    getAllTheaters,
    removeTheater,
} from "../../common/apiUtils";
import { Button, Container, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

/*
TODO: Handle empty dropdown
*/

const RemoveTheater= () => {
  const navigate = useNavigate();
  const [theaters, setTheaters] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [deleteTheater, setDeleteTheater] = useState({
    theaterId: ""
  })

  useEffect(() => {
    // Fetch all movies and theaters
    const fetchOptions = async () => {
      const theatersData = await getAllTheaters();
      setTheaters(theatersData);
    };
    fetchOptions();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeleteTheater({ ...deleteTheater, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log("deleted movie: ", deleteTheater)
        await removeTheater(deleteTheater.theaterId);
        setShowSuccess(true);
        setTimeout(() => navigate("/editor"), 1750);
    } catch (error) {
        console.error("Failed to delete movie:", error)
    }
  };

  return (
    <div>
      <Container maxWidth={"md"}>
        <h2 style={{ marginTop: "1em", marginBottom: "1em" }}>Remove Theater</h2>
        <form onSubmit={handleSubmit}>
          {/* Movie Dropdown */}
          <FormControl fullWidth style={{ marginBottom: "1em" }}>
            <InputLabel id="movie-label">Theater</InputLabel>
            <Select
              labelId="theater-label"
              id="theater-select"
              value={deleteTheater.theaterId}
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

          {showSuccess ? (
            <Button variant="contained" style={{ backgroundColor: "#4caf50", color: "white", opacity: 0.5 }} disabled>
              Success!
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Remove Theater
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default RemoveTheater;
