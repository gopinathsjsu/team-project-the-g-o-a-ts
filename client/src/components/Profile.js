import React, { useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import apiClient from "../api-client/apiClient";
import "../css/profile.css";
import { AuthContext } from "../contexts/AuthProvider";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  getAllBookingsById,
  removeBooking,
  getScreeningsById,
  getAllMovies,
  getAllTheaters,
} from "../common/apiUtils";
import {
  Container,
  Button,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Table,
} from "@mui/material";

const Profile = () => {
  const { userData } = useContext(AuthContext);

  const [moviesWithTickets, setMoviesWithTickets] = useState([
    { title: "Movie 1", tickets: 2 },
    { title: "Movie 2", tickets: 1 },
    { title: "Movie 3", tickets: 3 },
  ]);

  const [showtimes, setShowtimes] = useState({});
  const [activeBookings, setActiveBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [movies, setMovies] = useState([]);
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    const fetchActiveBookings = async () => {
      if (userData && userData._id) {
        const mvs = await getAllMovies();
        setMovies(mvs);
        const thts = await getAllTheaters();
        setTheaters(thts);
        const bookings = await getAllBookingsById(userData._id);
        setActiveBookings(bookings);

        // Fetch showtimes for the bookings
        for (const booking of bookings) {
          const showtime = await getScreeningsById(booking.showtimeId);
          setShowtimes((prev) => ({ ...prev, [booking.showtimeId]: showtime }));
        }
      }
    };
    fetchActiveBookings();
  }, [userData]);

  console.log(activeBookings);

  const handleRowClick = (booking) => {
    setSelectedBooking(booking);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmCancel = async () => {
    const showtime = showtimes[selectedBooking.showtimeId];
    if (showtime && new Date(showtime.startTime) > new Date()) {
      await removeBooking(selectedBooking._id);
      setActiveBookings(
        activeBookings.filter((b) => b._id !== selectedBooking._id)
      );
    }
    setOpenDialog(false);
  };

  if (!userData) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "5em" }}>
        Please Login First!
      </h2>
    ); // may change to just show user profile, but hide the buttons for editing etc.
  }

  return (
    <div class="container emp-profile">
      <form method="post">
        <div class="row">
          <div class="col-md-4">
            <div class="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="profile-head">
              <h5>{userData.name}</h5>
              <p>{userData.membershipType + " " + userData.role}</p>
              <p class="proile-rating">
                Points : <span>{userData.rewardsPoints}</span>
              </p>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>Movies Watched in the past 30 days</p>
              {activeBookings.length > 0 ? (
                <ul>
                  {activeBookings
                    .filter((booking) => {
                      const thirtyDaysAgo = new Date();
                      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                      const showtime = showtimes[booking.showtimeId];
                      return (
                        showtime &&
                        new Date(showtime.startTime) >= thirtyDaysAgo
                      );
                    })
                    .map((booking) => {
                      const movieTitle =
                        movies.find((movie) => movie._id === booking.movieId)
                          ?.title || "Loading...";
                      return <li key={booking._id}>{movieTitle}</li>;
                    })}
                </ul>
              ) : (
                <p>No movies watched in the past 30 days</p>
              )}
              <br />
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData._id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>

                {activeBookings.length > 0 ? (
                  <>
                    <Container maxWidth="lg" style={{ marginTop: "2em" }}>
                      <h3>Active Bookings</h3>
                      <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Movie Title</TableCell>
                              <TableCell align="right">Theater</TableCell>
                              <TableCell align="right">Tickets</TableCell>
                              <TableCell align="right">Start Time</TableCell>
                              <TableCell align="right">Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {activeBookings.map((booking) => {
                              const movieTitle =
                                movies.find(
                                  (movie) => movie._id === booking.movieId
                                )?.title || "Loading...";
                              const showtime = showtimes[booking.showtimeId];
                              const theaterName =
                                showtime &&
                                theaters.find(
                                  (theater) =>
                                    theater._id === showtime.theaterId
                                )?.name;
                              return (
                                <TableRow
                                  key={booking._id}
                                  hover
                                  onClick={() => handleRowClick(booking)}
                                >
                                  <TableCell component="th" scope="row">
                                    {movieTitle}
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    component="th"
                                    scope="row"
                                  >
                                    {theaterName || "Unknown"}
                                  </TableCell>
                                  <TableCell align="right">
                                    {booking.seatsBooked.length}
                                  </TableCell>
                                  <TableCell align="right">
                                    {showtime
                                      ? new Date(
                                          showtime.startTime
                                        ).toLocaleString()
                                      : "Loading..."}
                                  </TableCell>
                                  <TableCell align="right">
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                    >
                                      Cancel
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              );
                            })}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Container>

                    {/* Dialog for cancellation confirmation */}
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                      <DialogTitle>{"Cancel Booking"}</DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Are you sure you want to cancel this booking?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleCloseDialog} variant="contained">
                          No
                        </Button>
                        <Button
                          onClick={handleConfirmCancel}
                          variant="contained"
                          autoFocus
                        >
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </>
                ) : (
                  <p>No Active Bookings</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
