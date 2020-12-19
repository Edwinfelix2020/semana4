'use strict';
const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'users', 
      'estado',{
      type: sequelize.INTEGER,
      defaultValue: 1
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users');
  }
};