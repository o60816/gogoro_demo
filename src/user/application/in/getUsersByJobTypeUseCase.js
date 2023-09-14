export default function getUsersByJobTypeUseCase(service) {
    const getUsersByJobType = (from, to) => service.getUsersByJobType(from, to);
    return {
        getUsersByJobType
    };
}