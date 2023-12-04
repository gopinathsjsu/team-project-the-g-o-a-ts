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
