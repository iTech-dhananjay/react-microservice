import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import UserListPage from "../pages/users/UserListPage"; // Protecting routes like UserListPage

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nopage" element={<NotFoundPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/users" element={<UserListPage />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
                {/*<Route path="/users" element={<UserListPage />} />*/}
            </Route>
        </Routes>
    );
};

export default AppRoutes;