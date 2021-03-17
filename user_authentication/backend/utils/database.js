const Sequelize = require('sequelize');

const sequelize = new Sequelize('user_db', 'root', 'root', {
    host: "127.0.0.1",
    dialect: "sqlite"
});

module.exports = sequelize;