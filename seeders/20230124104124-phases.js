'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('phases', [{
      label: 'I have an idea but don’t know what to do next.',
    },
    {
      label: 'I have a business but I am not making money.'
    },
    {
      label: 'I have product/services, but I have poor sales.'
    },
    {
      label: 'We are generating revenue, we would like to grow through investment.'
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phases', null, {});
  }
};
