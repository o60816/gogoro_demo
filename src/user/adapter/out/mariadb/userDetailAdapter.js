import { UserDetailModel } from '../models/user-detail.js';
import { UserModel } from '../models/user.js';
import { Op } from 'sequelize';

export default function userDetailRepositoryMariaDB() {
    const addUserDetails = (userDetails) => {
        return UserDetailModel.bulkCreate(userDetails);
    }

    const getUsersByTime = (from, to) => {
        return UserDetailModel.findAll({
            include: [
                {
                    model: UserModel,
                    as: 'User'
                }
            ],
            where: {
                createdAt: {
                    [Op.between]: [from, to]
                }
            }
        });
    }
    
    return {
        addUserDetails,
        getUsersByTime
    }
}