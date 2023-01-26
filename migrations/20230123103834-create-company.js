const DataTypes = require('sequelize').DataTypes

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companies', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(55),
        field: 'name',
        allowNull: false
      },
      logo: {
        type: DataTypes.STRING(255),
        field: 'logo'
      },
      location: {
        type: DataTypes.STRING(100),
        field: 'location'
      },
      registered: {
        type: DataTypes.BOOLEAN,
        field: 'registered',
        allowNull: false
      },
      registrationNumber: {
        type: DataTypes.STRING(55),
        field: 'registrationNumber'
      },
      registrationDate: {
        type: DataTypes.DATEONLY,
        field: 'registrationDate',
        defaultValue: DataTypes.NOW
      },
      productsOrServices: {
        type: DataTypes.STRING(255),
        field: 'productsOrServices',
        allowNull: false
      },
      numberOfEmployees: {
        type: DataTypes.INTEGER,
        field: 'numberOfEmployees',
        allowNull: false
      },
      monthlyTurnover: {
        type: DataTypes.DOUBLE,
        field: 'monthlyTurnover',
        allowNull: false
      },
      annualTurnover: {
        type: DataTypes.DOUBLE.UNSIGNED,
        field: 'annualTurnover'
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
      phaseId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'phaseId',
        allowNull: false
      },
      industryId: {
        type: DataTypes.INTEGER.UNSIGNED,
        field: 'industryId',
        allowNull: false
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('companies');
  },
};