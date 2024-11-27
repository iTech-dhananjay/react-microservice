import { useDispatch } from "react-redux";
import { loginSuccess, logoutSuccess } from "../redux/slices/authSlice";
import { loginUser, registerUser, logoutUser } from "../api/authApi";

export const useAuth = () => {
    const dispatch = useDispatch();

    const login = async (credentials) => {
        try {
            const data = await loginUser(credentials);
            localStorage.setItem("sessionToken", data.token);
            dispatch(loginSuccess({ user: data.user, token: data.token }));
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const data = await registerUser(userData);
            localStorage.setItem("sessionToken", data.token);
            dispatch(loginSuccess({ user: data.user, token: data.token }));
        } catch (error) {
            console.error("Registration failed", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await logoutUser();
            localStorage.removeItem("sessionToken");
            dispatch(logoutSuccess());
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return { login, register, logout };
};