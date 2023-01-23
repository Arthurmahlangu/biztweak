const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('company_phases', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      phase: {
        type: DataTypes.STRING(255),
        field: 'phase',
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updatedAt'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('company_phases');
  },
};