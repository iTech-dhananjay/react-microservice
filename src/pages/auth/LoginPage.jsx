import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser} from '../../redux/slices/authSlice'
import loginIcon from "../../assets/icons/login.png";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({ emailOrPhone: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginUser(credentials));
        toast.success("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard after login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200">
                {/* Logo Section */}
                <div className="flex justify-center py-6 border-b">
                    <img src={loginIcon} alt="Login Icon" className="w-24 h-24" />
                </div>
                {/* Form Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
                        Welcome Back
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Please login to continue.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block font-medium mb-1">Email or Phone</label>
                            <input
                                type="text"
                                name="emailOrPhone"
                                value={credentials.emailOrPhone}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your email or phone"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-2 ${
                                loading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-indigo-600 hover:bg-indigo-700"
                            } text-white font-semibold rounded transition duration-300`}
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-500">
                        Don't have an account?{" "}
                        <a href="/register" className="text-indigo-600 hover:underline">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;