import React from "react";

const Checkbox = ({ label, id, register, error }) => {
    return (
        <div className="flex items-center gap-2 mb-4">
            <input
                type="checkbox"
                id={id}
                className={`rounded-md ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                {...register}
            />
            <label htmlFor={id} className="font-semibold">
                {label}
            </label>
            {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
    );
};

export default Checkbox;