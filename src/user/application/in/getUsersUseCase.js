export default function getUsersUseCase(service) {
    const getUsers = (page) => service.getUsers(page);
    return {
        getUsers
    };
}