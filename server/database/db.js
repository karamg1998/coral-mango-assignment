const Sequelize = require('sequelize');
const dotenv=require('dotenv');
dotenv.config();


const sequelize = new Sequelize(process.env.DBSCHEMA, process.env.DBUSER, process.env.DBPASSWORD, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;