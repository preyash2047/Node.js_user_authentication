const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');
const User_Auth = require('../models/user_auth_model')

const blog = sequelize.define('blog',{
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

    blog: {
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

User_Auth.hasMany(blog); // Set one to many relationship
module.exports = blog;