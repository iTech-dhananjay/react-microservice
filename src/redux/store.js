import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import sidebarSlice from './slices/sidebarSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        sidebar: sidebarSlice,
    },
});