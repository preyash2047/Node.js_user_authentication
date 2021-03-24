const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const User_Auth = require('./user_auth_model')

const item = sequelize.define('item',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    title: {
        type: DataTypes.TEXT("TEXT"),
        allowNull: false,
    },

    disc: {
        type: DataTypes.TEXT("LONG"),
        allowNull: false,
    },

    userID:{
        type: DataTypes.INTEGER,
        references:{
            model: User_Auth,
            key: "id"
        },
        allowNull: false,
    }
})

User_Auth.hasMany(item); // Set one to many relationship
module.exports = item;