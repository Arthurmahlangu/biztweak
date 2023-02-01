'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('phase_questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phaseId: {
        type: Sequelize.INTEGER
      },
      assessmentQuestionId: {
        type: Sequelize.INTEGER
      },
      priorityElement: {
        type: Sequelize.BOOLEAN,
        field: 'priorityElement'
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt',
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt',
        defaultValue: Sequelize.literal('NOW()')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('phase_questions');
  }
};