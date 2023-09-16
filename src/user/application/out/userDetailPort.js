export default function userDetailRepository(repositoryImpl) {
    const addUserDetails = (userDetails) => repositoryImpl.addUserDetails(userDetails);
    return {
        addUserDetails
    }
}