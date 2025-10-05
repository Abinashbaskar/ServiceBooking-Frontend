import axios from "axios";

// Axios instance for backend API
const api = axios.create({
  baseURL: "http://localhost:5000", // your backend port
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token if stored
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
