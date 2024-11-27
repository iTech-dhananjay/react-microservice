import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateForm } from "../../utils/validators"; // Import validation utility

const RegisterPage = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
        role: "",
        permissions: [],
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(form); // Call validation utility
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fix the errors in the form");
            return;
        }
        console.log(form);
        toast.success("Form submitted successfully!");
        setErrors({});
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setForm((prev) => ({
                ...prev,
                permissions: checked
                    ? [...prev.permissions, value]
                    : prev.permissions.filter((perm) => perm !== value),
            }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200">
                {/* Logo Section */}
                <div className="flex justify-center py-6 border-b">
                    <img src="/logo-placeholder.png" alt="Logo" className="w-24 h-24" />
                </div>
                {/* Form Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-center text-indigo-700 mb-4">
                        Sign Up
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Create an account to access exclusive features.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">{errors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">{errors.lastName}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                value={form.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Role</label>
                            <select
                                name="role"
                                value={form.role}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            >
                                <option value="">Select Role</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            {errors.role && (
                                <p className="text-red-500 text-sm">{errors.role}</p>
                            )}
                        </div>
                        <div>
                            <label className="block font-medium mb-2">Permissions</label>
                            <div className="flex space-x-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="permissions"
                                        value="read"
                                        checked={form.permissions.includes("read")}
                                        onChange={handleChange}
                                    />
                                    <span>Read</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        name="permissions"
                                        value="write"
                                        checked={form.permissions.includes("write")}
                                        onChange={handleChange}
                                    />
                                    <span>Write</span>
                                </label>
                            </div>
                            {errors.permissions && (
                                <p className="text-red-500 text-sm">{errors.permissions}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition duration-300"
                        >
                            Create Account
                        </button>
                    </form>
                    <p className="mt-6 text-center text-gray-500">
                        Already have an account?{" "}
                        <a href="/login" className="text-indigo-600 hover:underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
