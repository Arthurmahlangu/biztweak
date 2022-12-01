'use strict';

// ----------------------------------------------
// SELF         | GROUP         | OTHER         |
// ----------------------------------------------
// C.R.U.D      | C.R.U.D       | C.R.U.D       |
// ----------------------------------------------

// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('role', [{
            name: 'super',
            policy: 'CRUD-CRUD-CRUD',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            name: 'administrator',
            policy: 'CRUD-CR-RU',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            name: 'entrepreneur',
            policy: 'CR--',
            createdAt: new Date,
            updatedAt: new Date,
        }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('role', null, {});
    }
};
