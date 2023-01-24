const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_texts', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(100),
        field: 'title',
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
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
    await queryInterface.dropTable('course_texts');
  },
};