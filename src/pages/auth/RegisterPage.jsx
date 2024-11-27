import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import Checkbox from "../../components/ui/Checkbox";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phoneNumber: yup
        .string()
        .matches(/^\d{10}$/, "Phone Number must be 10 digits")
        .required("Phone Number is required"),
    role: yup.string().required("Role is required"),
    permissions: yup.array().min(1, "Select at least one permission"),
});

const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        toast.success("Form submitted successfully!");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="max-w-lg w-full p-8 bg-white rounded-xl shadow-xl border border-gray-200">
                <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Sign up to access exclusive features.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="flex gap-4">
                        <Input
                            label="First Name"
                            id="firstName"
                            register={register("firstName")}
                            error={errors.firstName}
                        />
                        <Input
                            label="Last Name"
                            id="lastName"
                            register={register("lastName")}
                            error={errors.lastName}
                        />
                    </div>
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        register={register("email")}
                        error={errors.email}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        register={register("password")}
                        error={errors.password}
                    />
                    <Input
                        label="Phone Number"
                        id="phoneNumber"
                        register={register("phoneNumber")}
                        error={errors.phoneNumber}
                    />
                    <Select
                        label="Role"
                        id="role"
                        options={[
                            { value: "user", label: "User" },
                            { value: "admin", label: "Admin" },
                        ]}
                        register={register("role")}
                        error={errors.role}
                    />
                    <div>
                        <label className="font-semibold mb-2">Permissions</label>
                        <div className="grid grid-cols-2 gap-2">
                            <Checkbox
                                label="Read"
                                id="permissionRead"
                                register={register("permissions")}
                                value="read"
                                error={errors.permissions}
                            />
                            <Checkbox
                                label="Write"
                                id="permissionWrite"
                                register={register("permissions")}
                                value="write"
                                error={errors.permissions}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-600 hover:to-blue-600 hover:scale-105 transition-all duration-300"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-indigo-600 hover:underline">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
