export default function getUsersService(repository) {
    const getUsers = (page) => repository.getUsers(page);
    return {
        getUsers
    }
}