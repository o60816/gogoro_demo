import Sequelize from 'sequelize';
import logger from '../../../utils/logger.js';
import { UserModel, initUserModel } from './models/user.js';
import { UserDetailModel, initUserDetailModel } from './models/user-detail.js';

export default async function initDatabase(config) {
    const sequelize = new Sequelize('gogoro', config.DB.Maria.User, config.DB.Maria.Pwd, {
        host: config.DB.Maria.Host,
        dialect: config.DB.Maria.Dialect,
        logging: logger.debug,
        timezone : '+08:00'
    });
    try { 
        await sequelize.authenticate();
        await initUserModel(sequelize);
        await initUserDetailModel(sequelize);
        await UserModel.hasOne(UserDetailModel, {
            foreignKey: 'id',
            as: 'Details'
        });
        logger.info(`MariaDB has initialized and connected`);
    }catch(err) {
        logger.error(err.message);
        process.abort();
    }
} 