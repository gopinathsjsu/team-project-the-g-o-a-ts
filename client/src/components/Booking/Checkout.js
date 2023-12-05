import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Button, Container, Divider, Grid, TextField } from "@mui/material";
import styled from "@emotion/styled";
import apiClient from "../../api-client/apiClient";

const Checkout = () => {
  const { userData } = useContext(AuthContext);
  const [bookingData, setBookingData] = useState({
    selectedSeats: [],
    totalPrice: 0,
    movieTitle: "",
    showtimeDetails: {},
  });

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    // Add other fields as necessary
  });

  const [bookingFee, setBookingFee] = useState(1.5);
  const [showtimeDate, setShowtimeDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [rewardsPointsUsed, setRewardsPointsUsed] = useState("");

  useEffect(() => {
    const storedBookingDetails = JSON.parse(localStorage.getItem("bookingDetails"));
    if (storedBookingDetails) {
      setBookingData(storedBookingDetails);
    }
  }, []);

  useEffect(() => {
    if (bookingData) {
      setShowtimeDate(
        new Date(bookingData.showtimeDetails.startTime).toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        })
      );

      setBookingFee(bookingData.selectedSeats.length * 1.5);
    }
  }, [bookingData]);

  useEffect(() => {
    if (bookingData) {
      setTotalPrice(bookingData.totalPrice + bookingFee);
    }
  }, [bookingFee]);

  useEffect(() => {
    if (userData && userData.membershipType == "Premium") {
      setBookingFee(0);
    }
    // if (userData) {
    // }
  }, [userData]);

  const postBooking = async () => {
    try {
      await apiClient
        .post("/bookings/createbooking", {
          userId: userData._id,
          showtimeId: bookingData.showtimeId,
          movieId: bookingData.movieId,
          seatsBooked: bookingData.selectedSeats,
          totalPrice: totalPrice,
        })
        .then(async (res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });

      const totalSeatsOccupied = [...bookingData.occupiedSeats, ...bookingData.selectedSeats];
      console.log(totalSeatsOccupied);
      await apiClient
        .put(`/showtimes/update/${bookingData.showtimeId}`, {
          seatsBooked: totalSeatsOccupied,
        })
        .then(async (res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const validateRewardsPoints = () => {
    if (userData) {
      if (rewardsPointsUsed === "") return true;
      const points = parseFloat(rewardsPointsUsed);

      if (
        !isNaN(points) &&
        points >= 0 &&
        points === Math.floor(points) &&
        points <= userData.rewardsPoints &&
        points <= totalPrice
      ) {
        return true;
      }
      return false;
    }
    return true;
  };

  const completeCheckout = () => {
    if (userData) {
      console.log("Submitting", userData._id, bookingData);
      postBooking();
    } else {
      console.log("Submitting", customerInfo, bookingData);
    }
    localStorage.removeItem("bookingDetails");

    // Navigate to a confirmation page or reset the state as needed
  };

  if (localStorage.getItem("bookingDetails") == null) {
    return (
      <Container maxWidth="lg">
        <h1 style={{ marginTop: "1em" }}>Checkout</h1>
        <Divider />
        <br />
        <p>Cart is Empty</p>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <h1 style={{ marginTop: "1em" }}>Checkout</h1>
      <Divider />
      <br />
      <Grid container>
        <Grid item xs={6}>
          <div>
            <h3>Booking Details</h3>
            <p>
              <strong>Movie:</strong> {bookingData.movieTitle}
            </p>
            <p>
              <strong>Showtime:</strong> {showtimeDate}
            </p>
            <p>
              <strong>Selected Seats:</strong> {bookingData.selectedSeats.join(", ")}
            </p>
          </div>

          <div>
            <h3>Customer Information</h3>
            {userData ? (
              <>
                <p>
                  <strong>Customer ID:</strong> {userData._id}
                </p>
                <p>
                  <strong>Name:</strong> {userData.name}
                </p>
                <p>
                  <strong>Email:</strong> {userData.email}
                </p>
                <p>
                  <strong>Membership:</strong> {userData.membershipType}
                </p>
                <p>
                  <strong>Rewards Points:</strong> {userData.rewardsPoints}
                </p>
                <TextField
                  label="Use Rewards Points"
                  variant="outlined"
                  type="number"
                  value={rewardsPointsUsed}
                  onChange={(e) => setRewardsPointsUsed(e.target.value)}
                  style={{ width: "80%" }}
                />
              </>
            ) : (
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  style={{ width: "80%", marginBottom: "0.5em", marginTop: "0.5em" }}
                />
                <TextField
                  label="Email"
                  type="email"
                  variant="outlined"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  style={{ width: "80%", marginBottom: "0.5em" }}
                />
                <TextField label="Credit Card Info" variant="outlined" name="ccinfo" style={{ width: "80%" }} />
              </form>
            )}
          </div>
        </Grid>
        <Grid item xs={6}>
          <h3>Total</h3>
          <br />
          <p>
            <strong>Subtotal:</strong> ${bookingData.totalPrice.toFixed(2)}
          </p>
          <p>
            <strong>Service Fee:</strong> ${bookingFee.toFixed(2)}
          </p>
          <Divider />
          <br />
          <Grid container>
            <Grid item xs={8}>
              <p>
                <strong>Total:</strong> ${totalPrice.toFixed(2)}
              </p>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" onClick={completeCheckout} disabled={!validateRewardsPoints()}>
                Purchase
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
