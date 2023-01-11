'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      work_experience: {
        type: Sequelize.STRING
      },
      work_experience2: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      market_newsletter: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      product_updates_and_community_announcements: {
        defaultValue: true,
        type: Sequelize.BOOLEAN
      },
      role: {
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
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
    await queryInterface.dropTable('users');
  }
};