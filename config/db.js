const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('MySQL connected...');

    // Sync all models
    await sequelize.sync({ alter: true });
    console.log('Models synchronized...');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
