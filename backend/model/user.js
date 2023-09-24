const Sequelize = require('sequelize')

const sequelize = require('../util/db')

const User = sequelize.define('User' , {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    },
    phone : {
        type : Sequelize.STRING,
        allowNull : false,
        unique : true
    }
})

module.exports = User;