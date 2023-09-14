export default function addUserDetailsService(repository) {
    const addUserDetails = (userDetails) => repository.addUserDetails(userDetails);
    return {
        addUserDetails
    }
}