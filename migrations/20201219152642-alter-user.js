'use strict';
const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users', 
      'rol',{
      type: sequelize.STRING,
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users');
  }
};