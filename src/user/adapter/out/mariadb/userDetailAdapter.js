import { UserDetailModel } from '../../../../frameworks/database/mariadb/models/user-detail.js';
import { UserModel } from '../../../../frameworks/database/mariadb/models/user.js';
import { Op, Sequelize } from 'sequelize';

export default function userDetailRepositoryMariaDB() {
    const addUserDetails = (userDetails) => {
        return UserDetailModel.bulkCreate(userDetails);
    }
    
    return {
        addUserDetails,
    }
}