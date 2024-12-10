import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/slices/sidebarSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-700 text-white shadow-lg transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } w-64 z-50`}
        >
            {/* Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-600">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                    className="text-2xl focus:outline-none"
                    onClick={() => dispatch(closeSidebar())}
                >
                    ✕
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-6">
                <ul className="space-y-4">
                    <li>
                        <Link
                            to="/"
                            className="flex items-center px-6 py-3 text-lg font-medium rounded-md hover:bg-gray-600 transition-colors"
                            onClick={() => dispatch(closeSidebar())}
                        >
                            <span className="mr-3">🏠</span> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className="flex items-center px-6 py-3 text-lg font-medium rounded-md hover:bg-gray-600 transition-colors"
                            onClick={() => dispatch(closeSidebar())}
                        >
                            <span className="mr-3">👥</span> Users
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="flex items-center px-6 py-3 text-lg font-medium rounded-md hover:bg-gray-600 transition-colors"
                            onClick={() => dispatch(closeSidebar())}
                        >
                            <span className="mr-3">🔑</span> Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            className="flex items-center px-6 py-3 text-lg font-medium rounded-md hover:bg-gray-600 transition-colors"
                            onClick={() => dispatch(closeSidebar())}
                        >
                            <span className="mr-3">📝</span> Register
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 border-t border-gray-600">
                <p className="text-center text-sm text-gray-400">
                    © 2024 MyApp. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;