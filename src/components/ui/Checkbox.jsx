import React from "react";

const Checkbox = ({ label, id, register, value, error }) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id={id}
                value={value}
                {...register}
                className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor={id} className="font-medium">
                {label}
            </label>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

export default Checkbox;
