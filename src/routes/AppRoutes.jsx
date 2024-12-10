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
            {/* User-related routes */}
            <Route path="/*" element={<UserRoutes />} />

            <Route path="/nopage" element={<NotFoundPage />} />

            {/* Auth routes */}
            <Route path="/*" element={<AuthRoutes />} />


        </Routes>
    );
};

export default AppRoutes;