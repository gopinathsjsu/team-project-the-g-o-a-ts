import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Button, Container, Divider, Grid, TextField } from "@mui/material";
import styled from "@emotion/styled";
import apiClient from "../../api-client/apiClient";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { userData, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const [showSuccess, setShowSuccess] = useState(false);
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
  const [updatedUserData, setUpdatedUserData] = useState(null);

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

      const pointsAdjustment = userData.rewardsPoints - rewardsPointsUsed + Math.floor(totalPrice - rewardsPointsUsed);
      await apiClient
        .put(`/users/edit/${userData._id}`, {
          rewardsPoints: pointsAdjustment,
        })
        .then(async (res) => {
          updateUserData(res.data); // update user context
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const postBookingNotLoggedIn = async () => {
    try {
      await apiClient
        .post("/bookings/createbooking", {
          userName: customerInfo.name,
          userEmail: customerInfo.email,
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

  const completeCheckout = async () => {
    if (userData) {
      postBooking();
    } else {
      postBookingNotLoggedIn();
    }
    setShowSuccess(true);
    await sleep(1750);
    localStorage.removeItem("bookingDetails");
    navigate("/");
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
                <p>
                  <i>Using saved payment method **21</i>
                </p>
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
              {validateRewardsPoints() && rewardsPointsUsed !== "" ? (
                <>
                  <p>
                    <strong>Rewards Points Used:</strong> {rewardsPointsUsed}
                  </p>
                  <p>
                    <strong>Total:</strong> ${(totalPrice - rewardsPointsUsed).toFixed(2)}
                  </p>
                </>
              ) : (
                <p>
                  <strong>Total:</strong> ${totalPrice.toFixed(2)}
                </p>
              )}
            </Grid>
            <Grid item xs={4}>
              {showSuccess ? (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#4caf50", color: "white", opacity: 0.5 }}
                  disabled
                >
                  Success!
                </Button>
              ) : (
                <Button variant="contained" onClick={completeCheckout} disabled={!validateRewardsPoints()}>
                  Purchase
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
