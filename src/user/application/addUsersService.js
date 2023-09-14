export default function addUsersService(repository) {
    const addUsers = (users) => repository.addUsers(users);
    return {
        addUsers
    }
}