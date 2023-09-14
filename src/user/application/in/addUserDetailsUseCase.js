export default function addUserDetailsUsecase(service) {
    const addUserDetails = (userDetails) => service.addUserDetails(userDetails);
    return {
        addUserDetails
    };
}