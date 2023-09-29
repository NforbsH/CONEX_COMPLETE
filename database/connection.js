const Sequelize = require('sequelize');
const dbname = 'conex';
const dbuser = 'root';
const dbpassword = '1234';
const host = 'localhost';
const sequelize = new Sequelize(dbname, dbuser, dbpassword,{
    dialect: 'mysql',
    operatorAliases: false
});

sequelize.authenticate()
.then(result=>{
    console.log("connected...")
})
.catch(error=>{
    console.log(error)
});

module.exports = sequelize 
global.sequelize = sequelize