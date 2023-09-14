export default function getUsersByTimeUseCase(service) {
    const getUsersByTime = (from, to) => service.getUsersByTime(from, to);
    return {
        getUsersByTime
    };
}