export default function getUsersByTimeService(repository) {
    const getUsersByTime = (from, to) => repository.getUsersByTime(from, to);
    return {
        getUsersByTime
    }
}