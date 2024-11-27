import React from "react";

const Select = ({ label, id, options, register, error }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="font-semibold mb-1">
                {label}
            </label>
            <select
                id={id}
                {...register}
                className={`p-2 border rounded-md w-full focus:outline-none ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
            >
                <option value="">Select {label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default Select;
