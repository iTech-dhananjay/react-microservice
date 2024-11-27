import React from "react";

const Input = ({ label, id, register, error, type = "text", ...props }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block font-semibold mb-1">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className={`w-full p-2 border rounded-md ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...register}
                {...props}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default Input;