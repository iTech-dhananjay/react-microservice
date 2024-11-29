import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <header className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <button
                className="text-2xl focus:outline-none"
                onClick={() => dispatch(toggleSidebar())}
            >
                ☰
            </button>
            <h1 className="text-lg font-bold">My App</h1>
        </header>
    );
};

export default Navbar;