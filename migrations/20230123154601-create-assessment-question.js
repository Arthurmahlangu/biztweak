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
      category: {
        type: DataTypes.STRING(100),
        field: 'category',
        allowNull: false
      },
      module: {
        type: DataTypes.TEXT,
        field: 'module'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt',
        defaultValue: Sequelize.literal('NOW()')
      },
      phaseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'phaseId',
        allowNull: false
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assessment_questions');
  },
};