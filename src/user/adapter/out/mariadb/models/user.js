'use strict';
import { Sequelize, Model } from 'sequelize';

export class UserModel extends Model{};
export async function initUserModel(sequelize) {
    UserModel.init({
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        jobType: {
            type: Sequelize.STRING(50),
            allowNull: false,
            field: 'job_type'
        }
    },
    {
        sequelize,
        timestamps: false,
        indexes: [
            {
                fields: ['job_type']
            }
        ],
        tableName: 'user',
        charset: 'utf8mb4',
        collate: 'utf8mb4_bin'
    });
    await UserModel.sync();
}
