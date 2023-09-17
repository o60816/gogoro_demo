
export default function userPort(repositoryImpl) {
    const addUsers = (users) => repositoryImpl.addUsers(users);
    const getUsersWithDetailBy = (queries) => repositoryImpl.getUsersWithDetailBy(queries);
    return {
        addUsers,
        getUsersWithDetailBy
    }
}