import {getUsers} from "../api/authApi";

export const useUsers = () => {

    const fetchUsers = async (usersData) => {
        try {
            const data = await getUsers(usersData)
            console.log(data,'data')
            return data
        } catch (error) {
            console.error("Failed to fetch users", error);
        }
    };



    return { fetchUsers };
};