'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('phases', [{
      label: "I have an idea but don’t know what to do next",
    },
    {
      label: "I have a business but am not making money"
    },
    {
      label: "I have products/services but I have poor sales"
    },
    {
      label: "We are generating revenue, we would like to grow through investment"
    },
    {
      label: "I would like to be an entrepreneur but don’t know where to start"
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phases', null, {});
  }
};
