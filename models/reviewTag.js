const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ReviewTag extends Model {}

ReviewTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        review_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'review',
                key: 'id',
            },
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tag',
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
        modelName: 'review_tag',

    }
);

module.exports = ReviewTag;

//this is just a connector. does not need CRUD routes.