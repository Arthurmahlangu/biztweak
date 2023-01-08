'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      phase: {
        allowNull: false,
        type: Sequelize.STRING
      },
      registered: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      registered: {
        type: Sequelize.BOOLEAN
      },
      registration_number: {
        type: Sequelize.STRING
      },
      industry: {
        allowNull: false,
        type: Sequelize.STRING
      },
      employees: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      monthly_turnover: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      annual_turnover: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      rating: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('companies');
  }
};