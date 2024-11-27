const API_BASE_URL = "http://localhost:4009"; // Replace with your backend base URL

export const API_ENDPOINTS = {
    REGISTER: `${API_BASE_URL}/ecom/auth/register`,
    LOGIN: `${API_BASE_URL}/ecom/auth/login`,
    LOGOUT: `${API_BASE_URL}/ecom/auth/logout`,
    GET_USERS: `${API_BASE_URL}/users`,
};