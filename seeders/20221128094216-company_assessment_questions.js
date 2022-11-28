'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('company_assessment_questions', [{
            user_id: 0,
            category: 'Customer relations',
            label: 'Do you know the types of relationships you need to establish with your customer segments?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer relations',
            label: 'Do you have a process for retaining your customer base?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer relations',
            label: 'Do you have a system in place for growing your customer base?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer relations',
            label: 'Do you have a process for getting your customer base?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer relations',
            label: 'Do you have a designated Customer Researcher Specialist for this?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // Channels

        {
            user_id: 0,
            category: 'Channels',
            label: 'Do you know how you are going to reach your customers?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Channels',
            label: 'Do you have a marketing plan in place?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Channels',
            label: 'Have you developed a network to reach your target audience?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Channels',
            label: 'Do you provide post-sales customer support?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Channels',
            label: 'Do you have a designated employee appointed for this?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // E-commerce

        {
            user_id: 0,
            category: 'E-commerce',
            label: 'Does your company sell online?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'E-commerce',
            label: 'Do you know how to set up an online shop?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'E-commerce',
            label: 'Do you know how to set up an online presence for your business?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'E-commerce',
            label: 'Do you have a designated E-Commerce specialist?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // Functional capability

        {
            user_id: 0,
            category: 'Functional Capability',
            label: 'Is there sufficient administration systems in place to help the company’s processes?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Functional Capability',
            label: 'Is the company’s organizational structure sufficient to support the delivery of products or services offered?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // Customer segments

        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know who your product is for?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know who is your target market/audience?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know where they are located?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know the Total market size?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know how much of your market is accessible?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know how much of your market is in your region/locality?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you have a profile for your ideal customer?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you know who your most important customers are?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Customer segments',
            label: 'Do you have a designated Customer Researcher Specialist for this?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // Business and customers

        {
            user_id: 0,
            category: 'Business and customers',
            label: 'Does the company have a defined business plan?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Business and customers',
            label: 'Is the company executing the business plan?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Business and customers',
            label: 'Does the company measure client/customer satisfaction?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Business and customers',
            label: 'Can you rate the effectiveness of client/customer engagement?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // Marketing and sales

        {
            user_id: 0,
            category: 'Marketing and sales',
            label: 'Does the company advertise?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Marketing and sales',
            label: 'Is the company’s advertising effective?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Marketing and sales',
            label: 'Does the company conduct sales planning and developed targets?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Marketing and sales',
            label: 'Do you have a price strategy in place?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Marketing and sales',
            label: 'Do you review your pricing strategy often?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Marketing and sales',
            label: 'Do you have a designated employee appointed for Marketing & Sales?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        

        // Revenue streams

        {
            user_id: 0,
            category: 'Revenue Streams',
            label: 'How are you generating revenue from each customer segment?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Revenue Streams',
            label: 'Do you know the value that your customers are willing to pay for?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Revenue Streams',
            label: 'Do you know how your customers are currently paying?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Revenue Streams',
            label: 'Do you know how your customers prefer to pay?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Revenue Streams',
            label: 'Do you have a designated employee appointed for this?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },


        // Ownership and mindset

        {
            user_id: 0,
            category: 'Ownership and mindset',
            label: 'Do the owners/executive management have sufficient experience in providing the product or service?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Ownership and mindset',
            label: 'The owners or management of the company are spending most of their time in the company?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            user_id: 0,
            category: 'Ownership and mindset',
            label: 'Are the educational qualifications or background experience sufficient to support the delivery of products or services offered?',
            answer: 'yes|no',
            createdAt: new Date,
            updatedAt: new Date,
        },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('company_assessment_questions', null, {});
    }
};
