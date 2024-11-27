import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as authApi from "../../api/authApi";

const initialState = {
    isAuthenticated: !!sessionStorage.getItem("sessionToken"),
    user: null,
    token: sessionStorage.getItem("sessionToken") || null,
    loading: false,
    error: null,
};


// Async thunk for registration
export const registerUser = createAsyncThunk(
    "registerUser",
    async (userData, { rejectWithValue }) => {
        try {
            const data = await authApi.registerUser(userData);
            data && toast.success("Registration successful!");
            return data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Registration failed";
            toast.error(errorMsg);
            return rejectWithValue(errorMsg);
        }
    }
);

// Async thunk for login
export const loginUser = createAsyncThunk(
    "loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const data = await authApi.loginUser(credentials);
            sessionStorage.setItem("sessionToken", data.token);
            toast.success("Login successful!");
            return data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Login failed";
            toast.error(errorMsg);
            return rejectWithValue(errorMsg);
        }
    }
);

// Async thunk for logout
export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { rejectWithValue }) => {
    try {
        await authApi.logoutUser();
        sessionStorage.removeItem("sessionToken");
        toast.success("Logged out successfully!");
    } catch (error) {
        const errorMsg = error.response?.data?.message || "Logout failed";
        toast.error(errorMsg);
        return rejectWithValue(errorMsg);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;