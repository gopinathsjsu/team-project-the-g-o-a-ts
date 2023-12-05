import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, getAllTheaters, getScreenings } from "../common/apiUtils";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const SpecificShowtime = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showtimes, setShowtimes] = useState([]);
  const [theaters, setTheaters] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const m = await getMovieById(movieId);
      setMovie(m);
    };
    getMovie();
  }, [movieId]);

  useEffect(() => {
    if (movie) {
      const getShowtimesForMovie = async () => {
        const screenings = await getScreenings();
        const filtered = screenings.filter((s) => {
          return s.movieId === movieId && new Date(s.startTime) > new Date();
        });
        setShowtimes(filtered);
        const allTheaters = await getAllTheaters();
        setTheaters(allTheaters);
      };
      getShowtimesForMovie();
    }
  }, [movie]);

  const getTheater = (theaterId) => {
    const theater = theaters.find((t) => t._id === theaterId);
    return theater ? theater : null;
  };

  if (!movie) {
    return <p>Loading</p>;
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: "1em" }}>
      <Grid container>
        <Grid item xs={8}>
          <h1>{movie.title}</h1>
          <h3>
            {movie.duration} <span style={{ fontWeight: 300, fontSize: 20 }}>Genre: {movie.genre}</span>
          </h3>
          <p>
            Release Date:{" "}
            <span style={{ fontWeight: 300 }}>
              {new Date(movie.releaseDate).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </p>
          <p>
            Director: <span style={{ fontWeight: 300 }}>{movie.director}</span>
          </p>
          <p>
            Cast: <span style={{ fontWeight: 300 }}>{movie.cast}</span>
          </p>
          <p>
            Description: <span style={{ fontWeight: 300 }}>{movie.description}</span>
          </p>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3} style={{ padding: 0, overflow: "hidden" }}>
            <img src={movie.imageUrl} style={{ width: "100%", height: "auto", display: "block" }} alt={movie.title} />
          </Paper>
        </Grid>
      </Grid>

      <h3>Showtimes:</h3>
      {showtimes.length === 0 || theaters.length === 0 ? (
        <>
          <br />
          <p>No showtimes for this movie.</p>
        </>
      ) : (
        <TableContainer component={Paper} style={{ marginTop: "1em" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Theater</TableCell>
                <TableCell align="right">Screen #</TableCell>
                <TableCell align="right">Showtime</TableCell>
                <TableCell align="right">Location</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {showtimes.map((showtime) => (
                <TableRow
                  key={showtime._id}
                  hover
                  onClick={() => navigate(`/bookingtickets/${showtime._id}`)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell component="th" scope="row">
                    {getTheater(showtime.theaterId) ? getTheater(showtime.theaterId).name : "Unknown Theater"}
                  </TableCell>
                  <TableCell align="right">{showtime.screenNumber}</TableCell>
                  <TableCell align="right">
                    {new Date(showtime.startTime).toLocaleString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                  <TableCell align="right">
                    {getTheater(showtime.theaterId) ? getTheater(showtime.theaterId).location : "Unknown Location"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default SpecificShowtime;
