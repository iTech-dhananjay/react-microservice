import axios from "axios";

// Create an Axios instance
const api = axios.create({
    baseURL: "http://localhost:4009/api", // Replace with your backend base URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptors for token handling (optional)
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("sessionToken"); // Use session token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;