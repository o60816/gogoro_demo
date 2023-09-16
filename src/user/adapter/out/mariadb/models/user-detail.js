'use strict';
import { Sequelize, Model } from 'sequelize';

export class UserDetailModel extends Model{};
export async function initUserDetailModel(sequelize) {
    UserDetailModel.init({
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
        },
        createdAt: {
            type: Sequelize.TIMESTAMP,
            allowNull: false,
            field: 'created_at'
        },
        city: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        zipCode: {
            type: Sequelize.STRING(10),
            allowNull: false,
            field: 'zip_code'
        },
        address: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING(50),
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        indexes: [
            {
                fields: ['created_at']
            }
        ],
        tableName: 'user_detail',
        charset: 'utf8mb4',
        collate: 'utf8mb4_bin'
    });
    await UserDetailModel.sync();
};
