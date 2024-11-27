export const validateForm = (form) => {
    const errors = {};
    if (!form.firstName.trim()) errors.firstName = "First Name is required";
    if (!form.lastName.trim()) errors.lastName = "Last Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
        errors.email = "Valid Email is required";
    if (!form.password.trim() || form.password.length < 6)
        errors.password = "Password must be at least 6 characters";
    if (!form.phoneNumber.trim() || !/^\d{10}$/.test(form.phoneNumber))
        errors.phoneNumber = "Phone Number must be 10 digits";
    if (!form.role) errors.role = "Role is required";
    if (form.permissions.length === 0)
        errors.permissions = "Select at least one permission";

    return errors;
};
