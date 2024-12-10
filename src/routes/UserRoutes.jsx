import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "../pages/users/UserListPage";
import SingleUserDetailsPage from "../pages/users/UserDetailPage";
import ProtectedRoute from "./ProtectedRoute";

const UserRoutes = () => {
    return (
        <Routes>
            {/* Protected user routes */}
            <Route element={<ProtectedRoute />}>
                <Route path="/users" element={<UserListPage />} />
                <Route path="user/:userId" element={<SingleUserDetailsPage />} />
            </Route>
        </Routes>
    );
};

export default UserRoutes;