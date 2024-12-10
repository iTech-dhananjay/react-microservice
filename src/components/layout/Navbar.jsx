import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-4 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-20">
            {/* Sidebar Toggle Button */}
            <div className="flex items-center">
                <button
                    className="text-3xl focus:outline-none mr-4"
                    onClick={() => dispatch(toggleSidebar())}
                >
                    ☰
                </button>
                <h1 className="text-xl font-bold tracking-wide">
                    My App
                </h1>
            </div>

            {/* Right-side Menu */}
            <nav className="flex items-center space-x-6 text-sm">
                <a href="/dashboard" className="hover:text-gray-300 transition-colors">
                    Dashboard
                </a>
                <a href="/settings" className="hover:text-gray-300 transition-colors">
                    Settings
                </a>
                <a href="/profile" className="hover:text-gray-300 transition-colors">
                    Profile
                </a>
            </nav>
        </header>
    );
};

export default Navbar;