const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Park extends Model {}

Park.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freesTableName: true,
        underscored: true,
        modelName: 'review',

    }
);

module.exports = Review;