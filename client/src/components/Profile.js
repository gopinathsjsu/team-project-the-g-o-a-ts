import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  // Example data for movies and tickets
  const [moviesWithTickets, setMoviesWithTickets] = useState([
    { title: "Movie 1", tickets: 2 },
    { title: "Movie 2", tickets: 1 },
    { title: "Movie 3", tickets: 3 },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieChange = (index) => {
    setSelectedMovie(moviesWithTickets[index]);
  };

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
              <h5>Jane Smith</h5>
              <h6>Premium Member</h6>
              <p class="proile-rating">
                Points : <span>100</span>
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
            <input
              type="submit"
              class="profile-edit-btn"
              name="btnAddMore"
              value="Edit Profile"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="profile-work">
              <p>WORK LINK</p>
              <a href="">Website Link</a>
              <br />
              <a href="">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="">Web Designer</a>
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
                <div class="row">
                  <div class="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div class="col-md-6">
                    <p>JaneSmith123</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Name</label>
                  </div>
                  <div class="col-md-6">
                    <p>Jane Smith</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Email</label>
                  </div>
                  <div class="col-md-6">
                    <p>janesmith@gmail.com</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div class="col-md-6">
                    <p>123 456 7890</p>
                  </div>
                </div>
                <div className="dropdown-container">
                  <label>Select a Movie: </label>
                  <select
                    value={selectedMovie ? selectedMovie.title : ""}
                    onChange={(e) =>
                      handleMovieChange(e.target.selectedIndex - 1)
                    }
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
                    You have {selectedMovie.tickets} tickets for{" "}
                    {selectedMovie.title}.
                  </p>
                )}
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="row">
                  <div class="col-md-6">
                    <label>Experience</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Hourly Rate</label>
                  </div>
                  <div class="col-md-6">
                    <p>10$/hr</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Total Projects</label>
                  </div>
                  <div class="col-md-6">
                    <p>230</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>English Level</label>
                  </div>
                  <div class="col-md-6">
                    <p>Expert</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <label>Availability</label>
                  </div>
                  <div class="col-md-6">
                    <p>6 months</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <label>Your Bio</label>
                    <br />
                    <p>Your detail description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    // <div className="profile-container">
    //   <link
    //     rel="stylesheet"
    //     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    //   />
    //   <div className="profilecard">
    //     <img className="profile-image" src="./img.jpg" alt="John" />
    //     <h1>John Doe</h1>
    //     <p className="title">Premium Member</p>
    //     <p className="points">Points: <span className="points-value">100</span></p>
    //     <div className="dropdown-container">
    //       <label>Select a Movie: </label>
    //       <select
    //         value={selectedMovie ? selectedMovie.title : ""}
    //         onChange={(e) => handleMovieChange(e.target.selectedIndex - 1)}
    //       >
    //         <option value="" disabled>Select a movie</option>
    //         {moviesWithTickets.map((movie, index) => (
    //           <option key={index} value={movie.title}>
    //             {movie.title} - {movie.tickets} tickets
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     {selectedMovie && (
    //       <p>You have {selectedMovie.tickets} tickets for {selectedMovie.title}.</p>
    //     )}
    //   </div>
    // </div>
  );
};

export default Profile;
