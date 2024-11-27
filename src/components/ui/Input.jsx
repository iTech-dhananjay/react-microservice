import React, { useState } from "react";

const Input = ({ label, id, type = "text", register, error }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="font-semibold mb-1">
                {label}
            </label>
            <div className="relative">
                <input
                    id={id}
                    type={type === "password" && isPasswordVisible ? "text" : type}
                    {...register}
                    className={`p-2 border rounded-md w-full focus:outline-none ${
                        error ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {type === "password" && (
                    <span
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        {isPasswordVisible ? "🙈" : "👁️"}
                    </span>
                )}
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default Input;
