'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('role', [{
            name: 'super',
            policy: 'rwx-rwx-rwx',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            name: 'administrator',
            policy: 'rwx-rwx-rw',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            name: 'entrepreneur',
            policy: 'rw--',
            createdAt: new Date,
            updatedAt: new Date,
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('role', null, {});
    }
};
