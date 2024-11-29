import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getUser} from "../../redux/slices/userSlice";
import {useDispatch, useSelector} from "react-redux"; // To fetch user data from Redux store

const SingleUserDetailsPage = () => {
    const { userId } = useParams();
    const decodedId = decodeURIComponent(userId)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Get the user from the Redux store (find by userId)
    const user = useSelector((state) =>
        state.user.users.find((u) => u._id === parseInt(decodedId))
    );

    const loading = useSelector((state) => state.user.loading);
    const error = useSelector((state) => state.user.error);

    if (!user && !loading && !error) {
        dispatch(getUser({ userId }));  // Trigger the action to fetch the user if not already in store
    }

    if (!user) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-700">User Not Found</h2>
                    <button
                        onClick={() => navigate("/users")}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to User List
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-700">
                        User Details - {user?.firstName}
                    </h2>
                    <button
                        onClick={() => navigate("/users")}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to List
                    </button>
                </div>

                {/* User Info Section */}
                <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Basic Info */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Basic Information
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong>Name:</strong> {user.name}
                                </li>
                                <li>
                                    <strong>Email:</strong> {user.email}
                                </li>
                                <li>
                                    <strong>Phone:</strong> {user.phone || "N/A"}
                                </li>
                                <li>
                                    <strong>Role:</strong> {user.role || "User"}
                                </li>
                            </ul>
                        </div>

                        {/* Status Info */}
                        <div className="bg-gray-50 p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Status Information
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={`px-2 py-1 text-sm rounded ${
                                            user.status === "active"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                        }`}
                                    >
                                        {user.status}
                                    </span>
                                </li>
                                <li>
                                    <strong>Verification:</strong>{" "}
                                    <span
                                        className={`px-2 py-1 text-sm rounded ${
                                            user.verificationStatus === "verified"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-yellow-100 text-yellow-600"
                                        }`}
                                    >
                                        {user.verificationStatus}
                                    </span>
                                </li>
                                <li>
                                    <strong>Document Status:</strong>{" "}
                                    <span
                                        className={`px-2 py-1 text-sm rounded ${
                                            user.docStatus === "uploaded"
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-red-100 text-red-600"
                                        }`}
                                    >
                                        {user.docStatus}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Additional Details
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <strong>Address:</strong> {user.address || "N/A"}
                            </li>
                            <li>
                                <strong>Joined On:</strong> {new Date(user.createdAt).toLocaleDateString()}
                            </li>
                            <li>
                                <strong>Last Updated:</strong> {new Date(user.updatedAt).toLocaleDateString()}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end items-center px-6 py-4 border-t">
                    <button
                        onClick={() => navigate(`/edit-user/${user?.id}`)}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-3"
                    >
                        Edit User
                    </button>
                    <button
                        onClick={() => navigate("/users")}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to List
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleUserDetailsPage;