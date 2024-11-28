import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUsers } from "../../hooks/useUsers"; // Redux action to fetch users
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserListPage = () => {
    const dispatch = useDispatch();
    const { fetchUsers } = useUsers()
    const { users, totalPages } = useSelector((state) => state?.user); // Accessing state from Redux

    const [filters, setFilters] = useState({
        search: "",
        status: "",
        group: "",
        verificationStatus: "",
        docStatus: "",
    });
    const [page, setPage] = useState(1);

// Fetch users manually when filters or page changes
    const fetchUsersData = () => {
        try {
            dispatch(fetchUsers({ filters, page })); // Dispatch the fetchUsers action
        } catch (error) {
            toast.error("Failed to fetch users");
            console.error(error);
        }
    };

// Handle filter changes
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
        fetchUsersData(); // Fetch data whenever filters are updated
    };

// Handle search input changes
    const handleSearchChange = (e) => {
        setFilters((prev) => ({ ...prev, search: e.target.value }));
        fetchUsersData(); // Fetch data whenever search input changes
    };

// Handle page change
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
            fetchUsersData(); // Fetch data for the new page
        } else {
            toast.error("Invalid page number");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 px-4">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-700">User List</h2>
                </div>

                {/* Filters Section */}
                <div className="px-6 py-4 border-b flex space-x-4 overflow-x-auto">
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Search by Name/Email</label>
                        <input
                            type="text"
                            name="search"
                            value={filters.search}
                            onChange={handleSearchChange}
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Enter name or email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Status</label>
                        <select
                            name="status"
                            value={filters.status}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">All</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Group / Sub-group</label>
                        <select
                            name="group"
                            value={filters.group}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">All</option>
                            <option value="group1">Group 1</option>
                            <option value="group2">Group 2</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Verification Status</label>
                        <select
                            name="verificationStatus"
                            value={filters.verificationStatus}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">All</option>
                            <option value="verified">Verified</option>
                            <option value="unverified">Unverified</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium mb-1">Doc Status</label>
                        <select
                            name="docStatus"
                            value={filters.docStatus}
                            onChange={handleFilterChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">All</option>
                            <option value="uploaded">Uploaded</option>
                            <option value="pending">Pending</option>
                        </select>
                    </div>
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto px-6 py-4">
                    <table className="min-w-full table-auto border border-gray-300 text-left">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border-b">Name</th>
                            <th className="p-3 border-b">Email</th>
                            <th className="p-3 border-b">Status</th>
                            <th className="p-3 border-b">Verification Status</th>
                            <th className="p-3 border-b">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users?.length ? (
                            users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="p-3 border-b">{user.name}</td>
                                    <td className="p-3 border-b">{user.email}</td>
                                    <td className="p-3 border-b">
                                            <span
                                                className={`px-2 py-1 text-sm rounded ${
                                                    user.status === "active"
                                                        ? "bg-green-100 text-green-600"
                                                        : "bg-red-100 text-red-600"
                                                }`}
                                            >
                                                {user.status}
                                            </span>
                                    </td>
                                    <td className="p-3 border-b">{user.verificationStatus}</td>
                                    <td className="p-3 border-b">
                                        <button className="text-indigo-600 hover:underline">
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-3">
                                    No users found.
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="flex justify-between items-center px-6 py-4 border-t">
                    <p className="text-gray-600 text-sm">
                        Showing page {page} of {totalPages}
                    </p>
                    <div className="space-x-2">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserListPage;