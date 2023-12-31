const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // facility: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        park_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'park',
                key: 'id',
            },
        },
    },
    {
        //freezeTableName: true makes it so table name will not have 's' at the end.
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',

    }
);

module.exports = Review;