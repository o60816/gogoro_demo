export default function userDetailRepository(repositoryImpl) {
    const addUserDetails = (userDetails) => repositoryImpl.addUserDetails(userDetails);
    const getUsersByTime = (from, to) => repositoryImpl.getUsersByTime(from, to);
    return {
        addUserDetails,
        getUsersByTime
    }
}