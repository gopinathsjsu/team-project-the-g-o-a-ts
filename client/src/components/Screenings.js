import React, { useState, useEffect } from "react";
import { getScreenings, getAllMovies, getCurrentMovies, getFutureMovies } from "../common/apiUtils";
import { Button, Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const Screenings = () => {
  //   const [showtimes, setShowtimes] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [futureMovies, setFutureMovies] = useState([]);

  useEffect(() => {
    const fetchScreenings = async () => {
      try {
        // const screenings = await getScreenings();
        // setShowtimes(screenings);
        // const allMovies = await getAllMovies();
        // setMovies(allMovies);

        const currentM = await getCurrentMovies();
        const futureM = await getFutureMovies();
        setCurrentMovies(currentM);
        setFutureMovies(futureM);
      } catch (error) {
        console.error(error);
      }
    };

    fetchScreenings();
  }, []);

  //   const filterMovieFromShowtime = (movieId) => {
  //     const movie = movies.find((m) => m._id === movieId); // Use .find() instead of .filter()[0]
  //     return movie ? movie : "Unknown Movie"; // Return a string, like the movie title
  //   };

  //   if (showtimes.length > 0 && movies.length > 0) {
  if (currentMovies.length > 0 || futureMovies.length > 0) {
    return (
      <Container maxWidth={"lg"} style={{ marginTop: "1em", marginBottom: "5em" }}>
        <h1>Screenings</h1>
        <br />
        <h2>Currently Playing</h2>
        <Grid container>
          {currentMovies.map((movie, index) => (
            <Grid item xs={3} key={index} style={{ display: "flex" }}>
              <Paper
                elevation={3}
                style={{
                  padding: "2em",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <img src={movie.imageUrl} style={{ maxHeight: "300px", alignSelf: "center" }} />
                  <h3 style={{ marginTop: "0.5em" }}>{movie.title}</h3>
                  <h6 style={{ marginTop: "0.5em" }}>{movie.duration}</h6>
                </div>
                <div style={{ marginTop: "auto" }}>
                  {/* <h6>
                  {new Date(screening.startTime).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </h6> */}
                  <Button variant="contained" component={Link} to={`/showtimes/${movie._id}`} style={{ width: "100%" }}>
                    Showtimes
                  </Button>
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <br />

        <h2>Coming Soon</h2>
        <Grid container>
          {futureMovies.map((movie, index) => (
            <Grid item xs={3} key={index} style={{ display: "flex" }}>
              <Paper
                elevation={3}
                style={{
                  padding: "2em",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <img src={movie.imageUrl} style={{ maxHeight: "300px", alignSelf: "center" }} />
                  <h3 style={{ marginTop: "0.5em" }}>{movie.title}</h3>
                </div>
                {/* <h6>
                  {new Date(screening.startTime).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </h6> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Screenings;
