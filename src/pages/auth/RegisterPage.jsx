import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import '../../styles/auth.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { register } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors
        setLoading(true); // Show loading state

        try {
            const response = await dispatch(register(formData));
            console.log("Registration successful:", response);
            // Redirect to another page or show success message
        } catch (err) {
            setError("Registration failed. Please try again.");
        } finally {
            setLoading(false); // Hide loading state after completion
        }
    };

    return (
        <div className="auth-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder="Enter your password"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" disabled={loading} className="submit-btn">
                    {loading ? "Creating Account..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;