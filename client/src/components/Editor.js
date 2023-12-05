import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Editor = () => {
  const [movies, setMovies] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const [theaters, setTheaters] = useState([]);

  return (
    <>
      <Button variant="contained" component={Link} to={`/editor/addtheater`}>
        Add Theater
      </Button>
      <Button variant="contained" component={Link} to={`/editor/addmovie`}>
        Add Movie
      </Button>
      <Button variant="contained" component={Link} to={`/editor/addshowtime`}>
        Add Showtime
      </Button>
      <Button variant="contained" component={Link} to={`/editor/removemovie`}>
        Remove Movie
      </Button>
      <Button variant="contained" component={Link} to={`/editor/removetheater`}>
        Remove Theater
      </Button>
    </>
  );
};

export default Editor;
