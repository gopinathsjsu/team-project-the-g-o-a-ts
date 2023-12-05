import React, { useState, useEffect, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import apiClient from "../api-client/apiClient";
import "./profile.css";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = () => {
  const { userData } = useContext(AuthContext);

  const [moviesWithTickets, setMoviesWithTickets] = useState([
    { title: "Movie 1", tickets: 2 },
    { title: "Movie 2", tickets: 1 },
    { title: "Movie 3", tickets: 3 },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieChange = (index) => {
    setSelectedMovie(moviesWithTickets[index]);
  };

  if (!userData) {
    return <h2 style={{ textAlign: "center", marginTop: "5em" }}>Please Login First!</h2>; // may change to just show user profile, but hide the buttons for editing etc.
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
              <h6>Premium Member</h6>
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
          <div class="col-md-2">
            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>Movies Watched in the past 30 days</p>
              <a href="">Barbie Movie</a>
              <br />
            </div>
          </div>
          <div class="col-md-8">
            <div class="tab-content profile-tab" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                <div className="dropdown-container">
                  <label>Select a Movie: </label>
                  <select
                    value={selectedMovie ? selectedMovie.title : ""}
                    onChange={(e) => handleMovieChange(e.target.selectedIndex - 1)}
                  >
                    <option value="" disabled>
                      Select a movie
                    </option>
                    {moviesWithTickets.map((movie, index) => (
                      <option key={index} value={movie.title}>
                        {movie.title} - {movie.tickets} tickets
                      </option>
                    ))}
                  </select>
                </div>
                {selectedMovie && (
                  <p>
                    You have {selectedMovie.tickets} tickets for {selectedMovie.title}.
                  </p>
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
