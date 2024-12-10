import React from "react";
import { Route, Routes } from "react-router-dom";
import UserListPage from "../pages/users/UserListPage";
import SingleUserDetailsPage from "../pages/users/UserDetailPage";
// import ProtectedRoute from "./ProtectedRoute";
//
// const UserRoutes = () => {
//     return (
//         <Routes>
//             {/* Protected user routes */}
//             <Route path="users" element={<ProtectedRoute />}>
//                 <Route index element={<UserListPage />} />
//                 <Route path=":userId" element={<SingleUserDetailsPage />} />
//             </Route>
//         </Routes>
//     );
// };
//
// export default UserRoutes;



const UserRoutes = () => {
    return (
        <Routes>
            <Route path="users" element={<UserListPage />} />
            <Route path="user/:userId" element={<SingleUserDetailsPage />} />
        </Routes>
    );
};

export default UserRoutes;