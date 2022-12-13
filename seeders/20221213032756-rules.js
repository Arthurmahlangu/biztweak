'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rules', [{
      role: "ROOT",
      model: "rules",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "rules",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "rules",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "rules",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    

    {
      role: "ROOT",
      model: "users",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "users",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "users",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "users",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    

    {
      role: "ROOT",
      model: "assessments",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "assessments",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "assessments",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "assessments",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    
    
    {
      role: "ROOT",
      model: "companies",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "companies",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "companies",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "companies",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    
    
    {
      role: "ROOT",
      model: "courses",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "courses",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "courses",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "courses",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },

    
    {
      role: "ROOT",
      model: "incubators",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "incubators",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "incubators",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "incubators",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    

    {
      role: "ROOT",
      model: "roles",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "roles",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "roles",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      model: "roles",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rules', null, {});
  }
};
