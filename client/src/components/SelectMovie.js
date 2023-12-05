import React, { useState, useEffect } from "react";
import "./selectmovie.css";
import apiClient from "../api-client/apiClient";

export default function SelectMovie() {
const [movies, setMovies] = useState([]);
const [selectedMovie, setSelectedMovie] = useState(null);


  const fetchMovies = async () => {
    try {
      const response = await apiClient.get(`/movies/getmovies`);
      console.log("Fetched Movies:", response.data);
      setMovies(response.data);
    } catch (err) {
      console.error(err.message);
      alert("Failed to fetch movies. Please check the API.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movies);

  const handleInputChange = (e) => {
    setSelectedMovie(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  

  return (
    <div id="selectmoviepage">
      <div>
        <section>
          <h2>Get Tickets</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="movie">Select Movie:</label>
            <select
              id="movie"
              name="name"
              onChange={handleInputChange}
              value={movies.title}
              required
            >
              {movies.length > 0?movies.map((movie) => (
                <option key={movie._id} value={movie.title}>
                  {movie.title}
                </option>
              )):null}
            </select>

            <button type="submit">Book Tickets</button>
          </form>
        </section>
      </div>
    </div>
  );
}
