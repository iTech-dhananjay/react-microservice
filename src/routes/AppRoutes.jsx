import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRoutes from "./AuthRoutes"; // Importing AuthRoutes
import ProtectedRoute from "./ProtectedRoute"; // Protecting routes
import UserListPage from "../pages/users/UserListPage";
import SingleUserDetailsPage from "../pages/users/UserDetailPage";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/nopage" element={<NotFoundPage />} />

            {/* Auth routes */}
            <Route path="/*" element={<AuthRoutes />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/users" element={<UserListPage />} />
                <Route path="/user/:userId" element={<SingleUserDetailsPage />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;