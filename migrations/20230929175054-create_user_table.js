'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
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
        type:Sequelize.STRING(50),
        allowNull:false,
    },
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE
    })


    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
