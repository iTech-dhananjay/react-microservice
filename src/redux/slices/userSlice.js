import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as authApi from "../../api/authApi";

const initialState = {
    users: [],
    totalPages: 0,
    loading: false,
    error: null,
};


// Async thunk for registration
export const getUsers = createAsyncThunk(
    "getUsers",
    async (userData, { rejectWithValue }) => {
        try {
            const data = await authApi.getUsers(userData);
            data && toast.success("Fetch users successful!");
            return data;
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Registration failed";
            toast.error(errorMsg);
            return rejectWithValue(errorMsg);
        }
    }
);

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUsers().fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(getUsers().rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export default userSlice.reducer;