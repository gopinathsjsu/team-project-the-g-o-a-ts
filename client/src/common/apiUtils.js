import apiClient from "../api-client/apiClient";

export const fetchUserById = async (userId) => {
  try {
    const response = await apiClient.get(`/users/getuser/${userId}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getScreenings = async () => {
  try {
    const response = await apiClient.get(`/showtimes/getshowtimes`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};


export const getScreeningsById = async (id) => {
  try {
    const response = await apiClient.get(`/showtimes/getshowtime/${id}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getAllBookings = async () => {
  try {
    const response = await apiClient.get(`/bookings/getbookings`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getAllBookingsById = async (userId) => {
  try {
    const response = await apiClient.get(`/bookings/getbookingsbyid/${userId}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const removeBooking = async (bookingId) => {
  try {
    const response = await apiClient.delete(`/bookings/remove/${bookingId}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getAllMovies = async () => {
  try {
    const response = await apiClient.get(`/movies/getmovies`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getFutureMovies = async () => {
  try {
    const response = await apiClient.get(`/movies/getfuturemovies`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getCurrentMovies = async () => {
  try {
    const response = await apiClient.get(`/movies/getcurrentmovies`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await apiClient.get(`/movies/getmovies/${id}`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const getAllTheaters = async () => {
  try {
    const response = await apiClient.get(`/theaters/gettheaters`);
    return response.data;
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const addMovie = async (movieData) => {
  try {
    const response = await apiClient
      .post(`/movies/createmovie`, movieData)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const updateMovie = async (movieId, updatedData) => {
  try {
    const response = await apiClient
      .put(`/movies/edit/${movieId}`, updatedData)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const removeMovie = async (movieId) => {
  try {
    const response = await apiClient
      .delete(`/movies/delete/${movieId}`)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const addShowtime = async (showtimeData) => {
  try {
    const response = await apiClient
      .post(`/showtimes/createshowtime`, showtimeData)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const updateShowtime = async (showtimeId, updatedData) => {
  try {
    const response = await apiClient
      .put(`/showtimes/update/${showtimeId}`, updatedData)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const removeShowtime = async (showtimeId) => {
  try {
    const response = await apiClient
      .delete(`/showtimes/remove/${showtimeId}`)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const addTheater = async (theaterData) => {
  try {
    const response = await apiClient
      .post(`/theaters/createtheater`, theaterData)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const updateTheater = async (theaterId, updatedData) => {
  try {
    const response = await apiClient
      .put(`/theaters/update/${theaterId}`, updatedData)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};

export const removeTheater = async (theaterId) => {
  try {
    const response = await apiClient
      .delete(`/theaters/remove/${theaterId}`)
      .then(() => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (err) {
    console.error(err.message);
    alert("Failed to fetch user. Please check the user ID.");
  }
};