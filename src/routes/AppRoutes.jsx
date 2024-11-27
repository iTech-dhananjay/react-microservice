import React from "react";
import { Route, Routes } from "react-router-dom";
// import HomePage from "../pages/HomePage";
// import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
// import UserListPage from "../pages/users/UserListPage";
import ProtectedRoute from "./ProtectedRoute"; // Protecting routes like UserListPage

const AppRoutes = () => {
    return (
        <Routes>
            {/*<Route path="/" element={<HomePage />} />*/}
            {/*<Route path="/login" element={<LoginPage />} />*/}
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
                {/*<Route path="/users" element={<UserListPage />} />*/}
            </Route>
        </Routes>
    );
};

export default AppRoutes;