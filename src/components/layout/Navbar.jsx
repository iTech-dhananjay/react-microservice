import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <header className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md fixed top-0 left-0 w-full z-10">
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

            {/* Right-side Menu (optional) */}
            <nav className="flex items-center space-x-6">
                <a href="/dashboard" className="hover:underline">
                    Dashboard
                </a>
                <a href="/settings" className="hover:underline">
                    Settings
                </a>
                <a href="/profile" className="hover:underline">
                    Profile
                </a>
            </nav>
        </header>
    );
};

export default Navbar;