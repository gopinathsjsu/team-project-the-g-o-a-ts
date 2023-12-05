import React, { useState } from "react";
import { addTheater } from "../../common/apiUtils";
import { Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddTheater = () => {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [newTheater, setNewTheater] = useState({
    name: "",
    location: "",
    screens: "",
    capacity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTheater({ ...newTheater, [name]: name === "screens" || name === "capacity" ? parseInt(value, 10) : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTheater.name || !newTheater.location || !newTheater.screens || !newTheater.capacity) {
      alert("All fields are required.");
      return;
    }

    try {
      await addTheater(newTheater);
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
        <h2 style={{ marginTop: "1em", marginBottom: "1em" }}>Add New Theater</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              type="text"
              name="name"
              value={newTheater.name}
              onChange={handleInputChange}
              style={{ width: "80%", marginBottom: "1em" }}
            />
          </div>

          <div>
            <TextField
              label="Location"
              variant="outlined"
              type="text"
              name="location"
              value={newTheater.location}
              onChange={handleInputChange}
              style={{ width: "80%", marginBottom: "1em" }}
            />
          </div>
          <div>
            <TextField
              label="Screens"
              variant="outlined"
              type="number"
              name="screens"
              value={newTheater.screens}
              onChange={handleInputChange}
              style={{ width: "80%", marginBottom: "1em" }}
            />
          </div>
          <div>
            <TextField
              label="Capacity (per screen)"
              variant="outlined"
              type="number"
              name="capacity"
              value={newTheater.capacity}
              onChange={handleInputChange}
              style={{ width: "80%", marginBottom: "1em" }}
            />
          </div>
          {showSuccess ? (
            <Button variant="contained" style={{ backgroundColor: "#4caf50", color: "white", opacity: 0.5 }} disabled>
              Success!
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              Add Theater
            </Button>
          )}
        </form>
      </Container>
    </div>
  );
};

export default AddTheater;
