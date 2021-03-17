const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const user_auth = sequelize.define('User_auth',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.TEXT("TEXT"),
        allowNull: false,
    },

    password: {
        type: DataTypes.TEXT("TEXT"),
        allowNull: false,
    }

})

module.exports = user_auth;