import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/slices/sidebarSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const dispatch = useDispatch();

    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } w-64`}
        >
            <button
                className="text-xl p-4 focus:outline-none"
                onClick={() => dispatch(closeSidebar())}
            >
                ✕
            </button>
            <nav className="mt-8">
                <ul className="space-y-4">
                    <li>
                        <Link to="/" className="block px-4 py-2 hover:bg-gray-700" onClick={() => dispatch(closeSidebar())}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/users" className="block px-4 py-2 hover:bg-gray-700" onClick={() => dispatch(closeSidebar())}>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="block px-4 py-2 hover:bg-gray-700" onClick={() => dispatch(closeSidebar())}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="block px-4 py-2 hover:bg-gray-700" onClick={() => dispatch(closeSidebar())}>
                            Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;