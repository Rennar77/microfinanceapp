const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database"); // Ensure your DB config is correct

const Loan = sequelize.define("Loan", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "pending", // Default loan status
  },
  repaymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "unpaid", // Default repayment status
  },
});

module.exports = Loan;
