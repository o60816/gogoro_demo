export default function getUsersByJobTypeService(repository) {
    const getUsersByJobType = (from, to) => repository.getUsersByJobType(from, to);
    return {
        getUsersByJobType
    }
}