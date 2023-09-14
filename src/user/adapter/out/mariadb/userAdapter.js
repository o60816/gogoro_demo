import { UserModel } from './models/user.js'
import { UserDetailModel } from './models/user-detail.js';

export default function userRepositoryMariaDB() {
    const addUsers = (users) => {
        return UserModel.bulkCreate(users);
    }

    const getUsers = (page) => {
        return UserModel.findAll({
            include: [
                {
                    model: UserDetailModel, 
                    as: 'Details'
                }
            ],
            offset: (page-1) * 10,
            limit: 10
        });
    }

    const getUsersByJobType = (jobType) => {
        return UserModel.findAll({
            include: [
                {
                    model: UserDetailModel, 
                    as: 'Details'
                }
            ],
            where: {
                jobType: jobType
            }
        });
    }

    return {
        addUsers,
        getUsers,
        getUsersByJobType
    }
}