export default function addUsersUsecase(service) {
    const addUsers = (users) => service.addUsers(users);
    return {
        addUsers
    };
}