import User from '../domain/user.js';

export default function getUsersByService(repository) {
    const getUsersWithDetailBy = async (queries) => {
        try {
            const users = (await repository.getUsersWithDetailBy(queries)).map((user)=>{
                const details = user.Details;
                return User(user.id, user.name, user.jobType, details.createdAt, details.city, details.zipCode, details.address, details.gender).toJson();
            });
            return users;
        }catch(err) {
            throw err;
        }
    }
    return {
        getUsersWithDetailBy
    }
}