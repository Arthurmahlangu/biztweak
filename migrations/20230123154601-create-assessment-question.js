const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assessment_questions', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      question: {
        type: DataTypes.STRING(255),
        field: 'question',
        allowNull: false
      },
      yesAnswer: {
        type: DataTypes.STRING(255),
        field: 'yesAnswer'
      },
      noAnswer: {
        type: DataTypes.STRING(255),
        field: 'noAnswer'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      },
      companyPhaseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'companyPhaseId',
        allowNull: false
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assessment_questions');
  },
};