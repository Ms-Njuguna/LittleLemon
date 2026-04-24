import axios from "axios";

const API = axios.create({
  baseURL: "https://little-lemon-api-bdsl.onrender.com/api",
});

// Attach token automatically if it exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;