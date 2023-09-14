
export default function userRepository(repositoryImpl) {
    const addUsers = (users) => repositoryImpl.addUsers(users);
    const getUsers = (page) => repositoryImpl.getUsers(page);
    const getUsersByJobType = (jobType) => repositoryImpl.getUsersByJobType(jobType);
    return {
        addUsers,
        getUsers,
        getUsersByJobType
    }
}