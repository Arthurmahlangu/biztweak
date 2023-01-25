'use strict';
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash("Admin@2022", salt)
    await queryInterface.bulkInsert('users', [{
      fullNames: "Root Administrator",
      email: "root@admin.com",
      role: "ROOT",
      password: hashPassword,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};