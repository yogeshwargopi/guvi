const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432, // Ensure port is included
    dialect: "postgres",
    logging: console.log, // Enable logging for debugging
  }
);

module.exports = sequelize;
