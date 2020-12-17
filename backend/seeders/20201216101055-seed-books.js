'use strict';
const {seeder} = require('../db-seeder')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
    seeder()
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
