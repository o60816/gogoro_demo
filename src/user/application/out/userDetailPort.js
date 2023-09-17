export default function userDetailPort(repositoryImpl) {
    const addUserDetails = (userDetails) => repositoryImpl.addUserDetails(userDetails);
    return {
        addUserDetails
    }
}