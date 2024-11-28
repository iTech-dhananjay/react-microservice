import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useAuth} from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import "../../styles/auth.css";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ emailOrPhone: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {login} = useAuth()
    const { loading } = useSelector((state) => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login(credentials));
        toast.success('Login successfully');
    };

    return (
        <div className="auth-container">
            <ToastContainer />
            <h2 className="auth-title">Login</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <input
                    type="email"
                    name="emailOrPhone"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="auth-submit-btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;