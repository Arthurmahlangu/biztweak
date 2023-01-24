'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('industry', [{
      question: '',
      yesAnswer: '',
      noAnswer: '',
      companyPhaseId: ''
    },
    {
      question: '',
      yesAnswer: '',
      noAnswer: '',
      companyPhaseId: ''
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('industry', null, {});
  }
};
