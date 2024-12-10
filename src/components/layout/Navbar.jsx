import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const Navbar = () => {
    const dispatch = useDispatch();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
        } else {
            document.documentElement.classList.add("dark");
        }
    };

    return (
        <header className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-black dark:to-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-lg fixed top-0 left-0 w-full z-20">
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

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="text-sm px-3 py-2 rounded-md bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
                >
                    {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;