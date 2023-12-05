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