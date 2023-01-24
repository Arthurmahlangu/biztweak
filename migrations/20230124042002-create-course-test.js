const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_tests', {
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
      answers: {
        type: DataTypes.TEXT,
        field: 'answers',
        allowNull: false
      },
      correctAnswer: {
        type: DataTypes.TEXT,
        field: 'correctAnswer',
        allowNull: false
      },
      status: {
        type: DataTypes.STRING(50),
        field: 'status',
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      },
      courseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'courseId'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('course_tests');
  },
};