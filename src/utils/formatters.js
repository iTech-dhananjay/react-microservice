export const filterUsersByName = (users, searchTerm) => {
    return users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
};