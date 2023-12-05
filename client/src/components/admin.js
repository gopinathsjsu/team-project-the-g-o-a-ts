import React, { useEffect, useState } from "react";
import GalleryCard3 from "./gallery-card3";
import {
  getAllBookings,
  getAllMovies,
  getAllTheaters,
  getCurrentMovies,
  getFutureMovies,
  getScreenings,
} from "../common/apiUtils";
import {
  Container,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Admin = (props) => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [futureMovies, setFutureMovies] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [theaters, setTheaters] = useState([]);
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const [analytics, setAnalytics] = useState({
    summaryByTheater: [],
    summaryByMovie: [],
  });

  const getCurrMovies = async () => {
    try {
      const currMovies = await getCurrentMovies();
      setCurrentMovies(currMovies);
    } catch (error) {
      console.error(error);
    }
  };

  const getFutMovies = async () => {
    try {
      const futMovies = await getFutureMovies();
      setFutureMovies(futMovies);
    } catch (err) {
      console.error(err);
    }
  };

  const getBookings = async () => {
    try {
      const allBookings = await getAllBookings();
      setBookings(allBookings);
    } catch (err) {
      console.error(err);
    }
  };

  const getTheaters = async () => {
    try {
      const allTheaters = await getAllTheaters();
      setTheaters(allTheaters);
    } catch (err) {
      console.error(err);
    }
  };

  const getMovies = async () => {
    try {
      const allMovies = await getAllMovies();
      setMovies(allMovies);
    } catch (err) {
      console.error(err);
    }
  };

  const getAllShowtimes = async () => {
    try {
      const allShowtimes = await getScreenings();
      setShowtimes(allShowtimes);
    } catch (err) {
      console.error(err);
    }
  };

  const computeSummaryByTheater = (bookings, theaters, showtimes) => {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    const summary = theaters.map((theater) => {
      const showtimesForTheater = showtimes.filter((showtime) => showtime.theaterId === theater._id);

      const bookingsForTheater = bookings.filter((booking) =>
        showtimesForTheater.some((showtime) => showtime._id === booking.showtimeId)
      );

      const totalSeatsBooked30 = bookingsForTheater
        .filter((booking) => (now - new Date(booking.bookingTime)) / oneDay <= 30)
        .reduce((acc, booking) => acc + booking.seatsBooked.length, 0);
      const totalSeatsBooked60 = bookingsForTheater
        .filter((booking) => (now - new Date(booking.bookingTime)) / oneDay <= 60)
        .reduce((acc, booking) => acc + booking.seatsBooked.length, 0);
      const totalSeatsBooked90 = bookingsForTheater
        .filter((booking) => (now - new Date(booking.bookingTime)) / oneDay <= 90)
        .reduce((acc, booking) => acc + booking.seatsBooked.length, 0);

      return {
        theaterName: theater.name,
        totalSeatsBooked30,
        totalSeatsBooked60,
        totalSeatsBooked90,
      };
    });

    return summary;
  };

  const computeSummaryByMovie = (bookings, movies, showtimes) => {
    const now = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    const summary = movies.map((movie) => {
      const showtimesForMovie = showtimes.filter((showtime) => showtime.movieId === movie._id);

      const bookingsForMovie = bookings.filter((booking) =>
        showtimesForMovie.some((showtime) => showtime._id === booking.showtimeId)
      );

      const totalSeatsBooked30 = bookingsForMovie
        .filter((booking) => (now - new Date(booking.bookingTime)) / oneDay <= 30)
        .reduce((acc, booking) => acc + booking.seatsBooked.length, 0);
      const totalSeatsBooked60 = bookingsForMovie
        .filter((booking) => (now - new Date(booking.bookingTime)) / oneDay <= 60)
        .reduce((acc, booking) => acc + booking.seatsBooked.length, 0);
      const totalSeatsBooked90 = bookingsForMovie
        .filter((booking) => (now - new Date(booking.bookingTime)) / oneDay <= 90)
        .reduce((acc, booking) => acc + booking.seatsBooked.length, 0);

      return {
        movieTitle: movie.title,
        totalSeatsBooked30,
        totalSeatsBooked60,
        totalSeatsBooked90,
      };
    });

    return summary;
  };

  useEffect(() => {
    getCurrMovies();
    getFutMovies();
    getBookings();
    getTheaters();
    getMovies();
    getAllShowtimes();
  }, []);

  useEffect(() => {
    if (bookings.length > 0) {
      const total = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
      setTotalRevenue(total);
    }
  }, [bookings]);

  useEffect(() => {
    if (bookings.length > 0 && theaters.length > 0 && movies.length > 0 && showtimes.length > 0) {
      const summaryByTheater = computeSummaryByTheater(bookings, theaters, showtimes);
      const summaryByMovie = computeSummaryByMovie(bookings, movies, showtimes);
      setAnalytics(() => ({
        summaryByTheater,
        summaryByMovie,
      }));
    }
  }, [bookings, theaters, movies, showtimes]);

  console.log("Analytics State: ", analytics);
  if (currentMovies.length === 0 && futureMovies.length === 0) {
    return <p>No movies at the moment.</p>;
  }

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: "2em" }}>
        <Typography variant="h3" gutterBottom>
          Analytics
        </Typography>

        {/* Revenue Card */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper className="dashboard-card" style={{ padding: "1em" }}>
              <Typography variant="h6" color="textSecondary">
                Total Revenue
              </Typography>
              <Typography variant="h4">${totalRevenue.toFixed(2)}</Typography>
            </Paper>
          </Grid>
        </Grid>

        <br />

        {/* Analytics Section */}
        <Grid container spacing={3}>
          {/* Theater Analytics Table */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Theater Analytics
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead style={{ backgroundColor: "#f0f0f0" }}>
                  <TableRow>
                    <TableCell>Theater Location</TableCell>
                    <TableCell align="right">Total Seats Booked (30d)</TableCell>
                    <TableCell align="right">Total Seats Booked (60d)</TableCell>
                    <TableCell align="right">Total Seats Booked (90d)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analytics.summaryByTheater &&
                    Array.isArray(analytics.summaryByTheater) &&
                    analytics.summaryByTheater.map((theater, index) => (
                      <TableRow key={index}>
                        <TableCell>{theater.theaterName}</TableCell>
                        <TableCell align="right">{theater.totalSeatsBooked30}</TableCell>
                        <TableCell align="right">{theater.totalSeatsBooked60}</TableCell>
                        <TableCell align="right">{theater.totalSeatsBooked90}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* Movie Analytics Table */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Movie Analytics
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead style={{ backgroundColor: "#f0f0f0" }}>
                  <TableRow>
                    <TableCell>Movie Title</TableCell>
                    <TableCell align="right">Total Seats Booked (30d)</TableCell>
                    <TableCell align="right">Total Seats Booked (60d)</TableCell>
                    <TableCell align="right">Total Seats Booked (90d)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {analytics.summaryByMovie.map((movie, index) => (
                    <TableRow key={index}>
                      <TableCell>{movie.movieTitle}</TableCell>
                      <TableCell align="right">{movie.totalSeatsBooked30}</TableCell>
                      <TableCell align="right">{movie.totalSeatsBooked60}</TableCell>
                      <TableCell align="right">{movie.totalSeatsBooked90}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Admin;
