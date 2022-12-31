'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rules', [{
      role: "ROOT",
      path: "/rules",
      model: "rules",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/rules/:id",
      model: "rules",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/rules",
      model: "rules",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/rules/:id",
      model: "rules",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/rules/:id",
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
      path: "/users/role/:id",
      model: "users",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/email/:id",
      model: "users",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/password/:id",
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
      path: "/users/super",
      model: "users",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/admin",
      model: "users",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/mentor",
      model: "users",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    
    {
      role: "ROOT",
      path: "/users",
      model: "users",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/:id",
      model: "users",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users",
      model: "users",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/:id",
      model: "users",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/users/:id",
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
      path: "/tokens",
      model: "tokens",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/tokens/:id",
      model: "tokens",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/tokens/:id",
      model: "tokens",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/tokens/:id",
      model: "tokens",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    

    {
      role: "ROOT",
      path: "/assessments",
      model: "assessments",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/assessments/:id",
      model: "assessments",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/assessments",
      model: "assessments",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/assessments/:id",
      model: "assessments",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/assessments/:id",
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
      path: "/companies",
      model: "companies",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies/:id",
      model: "companies",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies",
      model: "companies",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies/:id",
      model: "companies",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies/:id",
      model: "companies",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies/:id/assessments",
      model: "companies",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies/:cid/assessments/:aid",
      model: "companies",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/companies/:cid/assessments/:aid",
      model: "companies",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },
    
    
    {
      role: "ROOT",
      path: "/courses",
      model: "courses",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:id",
      model: "courses",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses",
      model: "courses",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:id",
      model: "courses",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:id",
      model: "courses",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:id/audio",
      model: "courses",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:cid/audio/:aid",
      model: "courses",
      method: "PUT",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:id/video",
      model: "courses",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/courses/:cid/video/:vid",
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
      path: "/incubators",
      model: "incubators",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/incubators/:id",
      model: "incubators",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/incubators",
      model: "incubators",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/incubators/:id",
      model: "incubators",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/incubators/:id",
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
      path: "/roles",
      model: "roles",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/roles/:id",
      model: "roles",
      method: "GET",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/roles",
      model: "roles",
      method: "POST",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/roles/:id",
      model: "roles",
      method: "DELETE",
      owner: 1,
      group: 1,
      other: 1,
      createdAt: new Date,
      updatedAt: new Date
    },{
      role: "ROOT",
      path: "/roles/:id",
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
