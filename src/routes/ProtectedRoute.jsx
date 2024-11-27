import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default ProtectedRoute;