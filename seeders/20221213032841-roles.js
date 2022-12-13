'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [{
      name: "ROOT",
      group: "ROOT",
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: "ADMIN",
      group: "ADMIN",
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: "MENTOR",
      group: "ADMIN",
      createdAt: new Date,
      updatedAt: new Date
    },{
      name: "ENTREPRENEUR",
      group: "ENTREPRENEUR",
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
