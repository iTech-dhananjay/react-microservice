import api from "./apiWrapper";
import { API_ENDPOINTS } from "./apiEndpoints";

export const registerUser = async (userData) => {
    const response = await api.post(API_ENDPOINTS.REGISTER, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
    return response.data;
};

export const logoutUser = async () => {
    const response = await api.post(API_ENDPOINTS.LOGOUT);
    return response.data;
};

export const getUsers = async () => {
    const response = await api.get(API_ENDPOINTS.GET_USERS);
    return response.data;
}

export const getUser = async (userId) => {
    const response = await api.get(API_ENDPOINTS.GET_USER(userId));
    return response.data;
};