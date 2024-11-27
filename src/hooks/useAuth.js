import { useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "../redux/slices/authSlice";
import { loginUser, registerUser, logoutUser } from "../api/authApi";

export const useAuth = () => {
    const dispatch = useDispatch();

    const login = async (credentials) => {
        try {
            const data = await loginUser(credentials);
            sessionStorage.setItem("sessionToken", data.token); // Change from localStorage to sessionStorage
            dispatch(loginSuccess({ user: data.user, token: data.token }));
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const data = await registerUser(userData);
            sessionStorage.setItem("sessionToken", data.token); // Change from localStorage to sessionStorage
            dispatch(loginSuccess({ user: data.user, token: data.token }));
        } catch (error) {
            console.error("Registration failed", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await logoutUser();
            sessionStorage.removeItem("sessionToken"); // Change from localStorage to sessionStorage
            dispatch(logoutSuccess());
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return { login, register, logout };
};