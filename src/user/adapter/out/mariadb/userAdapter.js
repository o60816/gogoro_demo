import { UserModel } from '../../../../frameworks/database/mariadb/models/user.js'
import { UserDetailModel } from '../../../../frameworks/database/mariadb/models/user-detail.js';
import { Op, Sequelize } from 'sequelize';

export default function userRepositoryMariaDB() {
    const addUsers = (users) => {
        return UserModel.bulkCreate(users);
    }

    const getUsersWithDetailBy = (queries) => {
        let page = parseInt(queries._page) || 1;
        let limit = parseInt(queries._limit) || 10;
        let createdFrom = parseInt(queries.createdFrom) || 0;
        let createdTo = parseInt(queries.createdTo) || Date.now()/1000;
        let jobType = queries.jobType;
        let conditions = {
            '$Details.created_at$': {
                [Op.between]: [Sequelize.fn('FROM_UNIXTIME', createdFrom), Sequelize.fn('FROM_UNIXTIME', createdTo)]
            }
        }
        if(jobType) {
            conditions.jobType = jobType;
        }
        return UserModel.findAll({
            include: [
                {
                    model: UserDetailModel, 
                    as: 'Details'
                }
            ],
            where: conditions,
            offset: (page-1) * limit,
            limit: limit
        });
    }

    return {
        addUsers,
        getUsersWithDetailBy
    }
}