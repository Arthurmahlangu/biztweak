'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('industries', [{
      label: 'Admin/Business support',
    },
    {
      label: 'Agriculture, Forestry,Fishing and Hunting'
    },
    {
      label: 'Arts, Entertainment and Recreation'
    },
    {
      label: 'Constrution'
    },
    {
      label: 'Education'
    },
    {
      label: 'Finance and Insurance'
    },
    {
      label: 'Healthcare and Social Assistance'
    },
    {
      label: 'Information Technology'
    },
    {
      label: 'Manufacturing'
    },
    {
      label: 'Mining and Mineral processing'
    },
    {
      label: 'Professional, Scientific and Technical Services'
    },
    {
      label: 'Real Estate'
    },
    {
      label: 'Retail'
    },
    {
      label: 'Transport and Logistics'
    },
    {
      label: 'Other'
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('industries', null, {});
  }
};
