import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import "../../styles/auth.css"

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "user",
        permissions: [],
        profileImage: null,
    });
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register } = useAuth();

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                permissions: checked
                    ? [...prev.permissions, value]
                    : prev.permissions.filter((perm) => perm !== value),
            }));
        } else if (type === "file") {
            setFormData({ ...formData, profileImage: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            if (key === "permissions") {
                formData.permissions.forEach((perm) => form.append("permissions[]", perm));
            } else {
                form.append(key, formData[key]);
            }
        }
        dispatch(register(form)).then((res) => {
            if (res.error) {
                setError(res.error);
            } else {
                setError("");
            }
        });
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div className="form-row">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="form-row">
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                    />
                </div>
                <div className="form-row">
                    <label>
                        Profile Image:
                        <input
                            type="file"
                            name="profileImage"
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Role:
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Permissions:
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="checkbox"
                                    value="read"
                                    checked={formData.permissions.includes("read")}
                                    onChange={handleChange}
                                />
                                Read
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="write"
                                    checked={formData.permissions.includes("write")}
                                    onChange={handleChange}
                                />
                                Write
                            </label>
                        </div>
                    </label>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;