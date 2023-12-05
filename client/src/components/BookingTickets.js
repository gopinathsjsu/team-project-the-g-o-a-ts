import React, { useEffect, useState } from "react";
import "../css/bookingtickets.css";
import List from "./List.js";
import { Button, Container, Grid } from "@mui/material";
import apiClient from "../api-client/apiClient.js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BookingTickets = () => {
  const [showtime, setShowtime] = useState([]);
  const [movie, setMovie] = useState(null);
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [theater, setTheater] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const { showtimeId } = useParams();
  const navigate = useNavigate();

  const getShowtimesById = async () => {
    try {
      await apiClient.get(`/showtimes/getshowtime/${showtimeId}`).then(async (res) => {
        setShowtime(res.data);
      });
    } catch (error) {
      console.error("Error showtimes", error);
    }
  };

  const getTheaterById = async (theaterId) => {
    try {
      await apiClient.get(`/theaters/gettheater/${theaterId}`).then(async (res) => {
        setTheater(res.data);
      });
    } catch (error) {
      console.error("Error getting theater", error);
    }
  };

  const getMovieById = async (movieId) => {
    try {
      await apiClient.get(`/movies/getmovies/${movieId}`).then(async (res) => {
        setMovie(res.data);
      });
    } catch (error) {
      console.error("Error getting movie", error);
    }
  };

  useEffect(() => {
    if (showtimeId) {
      getShowtimesById();
    }
  }, []);

  useEffect(() => {
    if (showtime && Object.keys(showtime).length > 0) {
      // Check if `showtime` is not null/undefined and not an empty object,
      // since it'll try to use showtimes value before its returned in the above useEffect
      setOccupiedSeats(showtime.seatsBooked);
      if (showtime.theaterId) {
        // Further check if theaterId exists
        getTheaterById(showtime.theaterId);
      }
      if (showtime.movieId) {
        getMovieById(showtime.movieId);
        console.log(movie);
      }
    }
  }, [showtime]); // Runs this effect every time showtime changes

  const [selectedSeatIds, setSelectedSeatIds] = useState([]);

  // Determine if we should use the discount price
  const shouldUseDiscountPrice = () => {
    if (!showtime || !showtime.startTime) return false;
    const showtimeDate = new Date(showtime.startTime);
    const isTuesday = showtimeDate.getDay() === 2;
    const isBefore6PM = showtimeDate.getHours() < 18;
    return isTuesday || isBefore6PM;
  };

  const handleSeatClick = (seatId) => {
    if (occupiedSeats.includes(seatId)) {
      return; // exit if seat is already occupied
    }

    const priceToUse = shouldUseDiscountPrice() ? showtime.discountPrice : showtime.price;

    setSelectedSeatIds((prevSelectedSeatIds) => {
      const isAlreadySelected = prevSelectedSeatIds.includes(seatId);

      if (isAlreadySelected) {
        // Deselecting a seat: remove it and subtract its price from the total
        setTotalPrice((currentTotalPrice) => currentTotalPrice - priceToUse);
        return prevSelectedSeatIds.filter((id) => id !== seatId);
      } else {
        // Selecting a seat: add it if less than 8 seats are already selected
        if (prevSelectedSeatIds.length < 8) {
          setTotalPrice((currentTotalPrice) => currentTotalPrice + priceToUse);
          return [...prevSelectedSeatIds, seatId];
        } else {
          return prevSelectedSeatIds;
        }
      }
    });
  };

  const submitSeats = () => {
    const bookingDetails = {
      selectedSeats: selectedSeatIds,
      totalPrice: totalPrice,
      movieTitle: movie ? movie.title : "", // Replace 'title' with the actual property name
      movieId: movie ? movie._id : "",
      showtimeId: showtime ? showtime._id : "",
      showtimeDetails: showtime
        ? {
            startTime: showtime.startTime,
          }
        : {},
      occupiedSeats: showtime.seatsBooked,
    };

    // Store the booking details in session storage
    localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    navigate("/checkout");
  };

  const renderSeats = () => {
    if (theater && theater.capacity) {
      // Make sure theater is not null before trying to render seats
      const seatElements = [];
      for (let i = 0; i < theater.capacity; i++) {
        const isOccupied = occupiedSeats.includes(i);
        const isSelected = selectedSeatIds.includes(i);
        seatElements.push(
          <Grid item key={i} xs={1}>
            <div
              className={`seat ${isOccupied ? "occupied" : ""} ${isSelected ? "selected" : ""}`}
              onClick={() => handleSeatClick(i)}
            >
              {""}
            </div>
          </Grid>
        );
      }
      return seatElements;
    }
    return null;
  };

  return (
    <>
      <Container maxWidth="md">
        <div style={{ marginTop: "2em", backgroundColor: "gray" }}>
          <List />
          <Grid container spacing={1} style={{ padding: "1em", paddingRight: "0" }}>
            {renderSeats()}
          </Grid>
        </div>

        <p style={{ marginTop: "1em", fontWeight: 300 }}>
          Total price: ${totalPrice} {shouldUseDiscountPrice() ? <span>(Discounted Rate)</span> : null}
        </p>
        <Button variant="contained" onClick={submitSeats}>
          Checkout
        </Button>
      </Container>
    </>
  );
};

export default BookingTickets;
