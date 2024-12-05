const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("microfinance", "username", "password", {
  host: "localhost",
  dialect: "mysql", // Or your preferred database
});

module.exports = sequelize;
