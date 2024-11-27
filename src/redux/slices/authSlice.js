import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: !!sessionStorage.getItem("sessionToken"), // Check sessionStorage for token
    user: null,
    token: sessionStorage.getItem("sessionToken") || null, // Get token from sessionStorage
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logoutSuccess(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;