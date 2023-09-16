import { UserModel } from '../../../../frameworks/database/mariadb/models/user.js'
import { UserDetailModel } from '../../../../frameworks/database/mariadb/models/user-detail.js';
import { Op, Sequelize } from 'sequelize';

export default function userRepositoryMariaDB() {
    const addUsers = (users) => {
        return UserModel.bulkCreate(users);
    }

    const getUsersWithDetailBy = (queries) => {
        let conditions = {
            '$Details.created_at$': {
                [Op.between]: [Sequelize.fn('FROM_UNIXTIME', queries.createdFrom), Sequelize.fn('FROM_UNIXTIME', queries.createdTo)]
            }
        }
        if(queries.jobType) {
            conditions.jobType = queries.jobType;
        }
        return UserModel.findAndCountAll({
            include: [
                {
                    model: UserDetailModel, 
                    as: 'Details'
                }
            ],
            where: conditions,
            offset: (queries.page-1) * queries.limit,
            limit: queries.limit
        });
    }

    return {
        addUsers,
        getUsersWithDetailBy
    }
}