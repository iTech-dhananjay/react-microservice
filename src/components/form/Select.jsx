import React from "react";

const Select = ({ label, id, options, register, error }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block font-semibold mb-1">
                {label}
            </label>
            <select
                id={id}
                className={`w-full p-2 border rounded-md ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...register}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default Select;