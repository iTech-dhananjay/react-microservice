import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";
import "../../styles/auth.css";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        profileImage: null,
        role: "user",
        permissions: [],
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profileImage: e.target.files[0] });
    };

    const handlePermissionChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            permissions: checked
                ? [...prev.permissions, value]
                : prev.permissions.filter((perm) => perm !== value),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = new FormData();
        for (const key in formData) {
            if (key === "permissions") {
                formData.permissions.forEach((perm) => userData.append("permissions[]", perm));
            } else {
                userData.append(key, formData[key]);
            }
        }
        dispatch(registerUser(userData));
    };

    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input type="file" name="profileImage" onChange={handleFileChange} required />

                <div>
                    <label>
                        Role:
                        <select name="role" onChange={handleChange} defaultValue="user">
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Permissions:
                        <input type="checkbox" value="read" onChange={handlePermissionChange} /> Read
                        <input type="checkbox" value="write" onChange={handlePermissionChange} /> Write
                    </label>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;