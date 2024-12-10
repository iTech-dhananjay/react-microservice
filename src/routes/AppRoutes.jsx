import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./UserRoutes";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/nopage" element={<NotFoundPage />} />

            {/* Auth routes */}
            <Route path="/*" element={<AuthRoutes />} />

            {/* User-related routes */}
            <Route path="/*" element={<UserRoutes />} />
        </Routes>
    );
};

export default AppRoutes;