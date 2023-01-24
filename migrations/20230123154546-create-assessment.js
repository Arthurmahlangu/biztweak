const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('assessments', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      questionsAndAnswers: {
        type: DataTypes.TEXT,
        field: 'questionsAndAnswers',
        allowNull: false
      },
      report: {
        type: DataTypes.TEXT,
        field: 'report',
        allowNull: false
      },
      recommendedModules: {
        type: DataTypes.TEXT,
        field: 'recommendedModules'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'userId',
        allowNull: false
      },
      companyId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'companyId',
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('assessments');
  },
};