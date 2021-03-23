const Sequelize = require('sequelize');

const sequelize = new Sequelize('blue', 'lol', 'lol', {
    host: "127.0.0.1",
    dialect: "sqlite"
});

module.exports = sequelize;