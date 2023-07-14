const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Park extends Model {}

Park.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        //freezeTableName: true makes it so table name will not have 's' at the end.
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'park',

    }
);

module.exports = Park;