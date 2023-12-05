import React from "react";
import "../css/bookingtickets.css";
import List from "./List.js";
import { Container, Grid } from "@mui/material";
import apiClient from "../api-client/apiClient.js";

const BookingTickets = () => {
  const getShowtimes = async () => {
    // await apiClient
    //   .post("/showtimes/login", {
    //     email: e.target[0].value,
    //     password: e.target[1].value,
    //   })
    //   .then(async (res) => {
    //     const token = res.data.accessToken;
    //     if (token) {
    //       localStorage.setItem("token", token);
    //       const decoded = jwtDecode(token);
    //       const userId = decoded.id;
    //       const userData = await fetchUserById(userId);
    //       login(token, userData);
    //     }
    //   })
    //   .catch((err) => {
    //     if (err instanceof CanceledError) return;
    //     console.log(err.message);
    //     alert("Failed to login to user, check your information!");
    //   });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2em", backgroundColor: "gray" }}>
      <List />
      <Grid container>
        <Grid item xs={1}>
          Seat
        </Grid>
        <Grid item xs={1}>
          Seat
        </Grid>
        <Grid item xs={1}>
          Seat
        </Grid>
        <Grid item xs={1}>
          Seat
        </Grid>
        <Grid item xs={1}>
          Seat
        </Grid>
        <Grid item xs={1}>
          Seat
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookingTickets;
