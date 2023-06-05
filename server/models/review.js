const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const Review = sequelize.define('Review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    review: {
        type: Sequelize.STRING
    }
});

module.exports = Review;