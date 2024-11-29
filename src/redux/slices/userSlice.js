import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as authApi from "../../api/authApi";

const initialState = {
    users: [],
    totalPages: 0,
    loading: false,
    error: null,
};


// Async thunk for fetching users
export const getUsers = createAsyncThunk(
    "getUsers", // Unique action type
    async (userData, { rejectWithValue }) => {
        try {
            const data = await authApi.getUsers(); // API call
            toast.success("Fetch users successful!");
            return data; // Expecting `{ users, totalPages }`
        } catch (error) {
            const errorMsg = error.response?.data?.message || "Failed to fetch users";
            toast.error(errorMsg);
            return rejectWithValue(errorMsg); // Reject with error message
        }
    }
);

export const getUser = createAsyncThunk(
    "getUser",
    async (userId, { rejectWithValue }) => {
        try {
            const data = await authApi.getUser(userId)
            toast.success('Fetch user successful!');
            return data;
        }catch(error){
            const errorMsg = error.response?.data?.message || "Failed to fetch users";
            toast.error(errorMsg);
            return rejectWithValue(errorMsg);
        }
    }
)

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
            .addCase(getUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload.users; // Assuming `data` contains `users` and `totalPages`
                state.totalPages = action.payload.totalPages;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload); // Add the fetched user to the `users` array
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

    },
});

export default userSlice.reducer;