import { useState, useEffect } from "react";
import { API_ENDPOINTS } from "../api/apiEndpoints";
import api from "../api/apiWrapper";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            const response = await api.get(API_ENDPOINTS.GET_USERS);
            setUsers(response.data);
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return { users, loading };
};