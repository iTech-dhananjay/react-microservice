import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../api/authApi";
import { loginSuccess } from "../../redux/slices/authSlice";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await registerUser(formData);
            localStorage.setItem("sessionToken", data.token);
            dispatch(loginSuccess({ user: data.user, token: data.token }));
            alert("Registration successful!");
        } catch (err) {
            setError("Registration failed! " + err.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;