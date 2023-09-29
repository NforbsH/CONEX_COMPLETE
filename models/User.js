const Sequelize = require('sequelize');
const sequelize = require('../database/connection.js');

const User = sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER(11),
        allowNull:false,
        autoIncrement:true,
        primaryKey: true,
    },
    
    firstname:{
        type:Sequelize.STRING(50),
        allowNull:false,
    },
     
    lastname:{
        type:STRING(50),
        allowNull:false,
    }
});

module.exports = User;