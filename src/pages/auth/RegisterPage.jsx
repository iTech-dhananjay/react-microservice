import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Checkbox from "../../components/form/Checkbox";

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
    permissions: yup
        .array()
        .min(1, "Select at least one permission"),
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
        alert("Form submitted successfully!");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <label className="font-semibold mb-1">Permissions</label>
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
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;