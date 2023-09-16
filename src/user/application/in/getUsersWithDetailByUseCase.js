export default function getUsersByUseCase(service) {
    const getUsersWithDetailBy = (queries) => service.getUsersWithDetailBy(queries);
    return {
        getUsersWithDetailBy
    }
 }