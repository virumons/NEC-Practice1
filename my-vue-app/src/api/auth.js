import axios from "axios";

const API_URL = "http://localhost:5000/users";

// Login Function
export const loginUser = async (email, password) => {
  const response = await axios.get(`${API_URL}?email=${email}&password=${password}`);
  return response.data.length > 0 ? response.data[0] : null;
};

// Register Function
export const registerUser = async (email, password) => {
  const response = await axios.post(API_URL, { email, password, verified: false });
  return response.data;
};
