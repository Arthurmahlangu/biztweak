'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('role', [{
            name: 'super',
            policy: '7777',
            isBetaMember: false
        },
        {
            name: 'admin',
            policy: '7777',
            isBetaMember: false
        },
        {
            name: 'entrepreneur',
            policy: '7777',
            isBetaMember: false
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('role', null, {});
    }
};
