const db = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const phase1 = await db.assessment_question.findAll({
      where: { 
        category: [
          'Compliance and Certification',
          'Prototype',
          'Functional Capability',
          'Customer Segments',
          'Revenue Streams',
          'Value Proposition',
          'Cost Structure',
          'Proof of Concept',
          'Key Resources'
        ]
      }
    })

    const phase2 = await db.assessment_question.findAll({
      where: { 
        category: [
          'Compliance and Certification',
          'Customer relations',
          'Channels',
          'e-Commerce',
          'Functional Capability',
          'Customer Segments',
          'Business and Customers',
          'Marketing and Sales',
          'Revenue Streams',
          'Ownership and Mindset'
        ]
      }
    })

    const phase3 = await db.assessment_question.findAll({
      where: { 
        category: [
          'Compliance and Certification',
          'e-Commerce',
          'Customer Segments',
          'Business and Customers',
          'Ownership and Mindset',
          'Marketing and Sales',
          'Market Intelligence',
          'Delivery Expertise',
          'Value Proposition',
          'Key Activities',
          'Current Alternatives',
          'Key Partners',
          'Key Resources'
        ]
      }
    })

    const phase4 = await db.assessment_question.findAll({
      where: { 
        category: [
          'Channels',
          'Functional Capability',
          'Customer Segments',
          'Business and Customers',
          'Revenue Streams',
          'Value Proposition',
          'Current Alternatives',
          'Ownership and Mindset',
          'Key Partners',
          'Legal Commercial Contracts Agreements',
          'Traction',
          'Financial Management',
          'Cost Structure',
          'Growth Strategy',
          'Business Process Management',
          'Employee Satisfaction',
          'Key Resources',
          'Compliance and Certification'
        ]
      }
    })

    const phase1Questions = []
    const phase2Questions = []
    const phase3Questions = []
    const phase4Questions = []

    phase1.forEach(({ id, category }) => {
      let priorityElement = false

      const priorityElements = [
        'Compliance and Certification',
        'Value Proposition',
        'Customer Segments',
        'Proof of Concept',
      ]

      if (priorityElements.includes(category)) {
        priorityElement = true
      }

      phase1Questions.push({
        phaseId: 1,
        assessmentQuestionId: id,
        priorityElement
      })
    })
    await queryInterface.bulkInsert('phase_questions', phase1Questions)

    phase2.forEach(({ id, category }) => {
      let priorityElement = false

      const priorityElements = [
        'Compliance and Certification',
        'Channels',
        'Customer Segments',
        'Marketing and Sales',
      ]

      if (priorityElements.includes(category)) {
        priorityElement = true
      }

      phase2Questions.push({
        phaseId: 2,
        assessmentQuestionId: id,
        priorityElement
      })
    })
    await queryInterface.bulkInsert('phase_questions', phase2Questions)

    phase3.forEach(({ id, category }) => {
      let priorityElement = false

      const priorityElements = [
        'Compliance and Certification',
        'Market Intelligence',
        'Customer Segments',
        'Value Proposition',
        'Marketing and Sales',
        'Ownership and Mindset'
      ]

      if (priorityElements.includes(category)) {
        priorityElement = true
      }

      phase3Questions.push({
        phaseId: 3,
        assessmentQuestionId: id,
        priorityElement
      })
    })
    await queryInterface.bulkInsert('phase_questions', phase3Questions)

    phase4.forEach(({ id, category }) => {
      let priorityElement = false

      const priorityElements = [
        'Key Partners',
        'Traction',
        'Financial Management',
        'Business Process Management',
        'Unique Selling Point',
        'Growth Strategy',
        'Functional Capability'
      ]

      if (priorityElements.includes(category)) {
        priorityElement = true
      }

      phase4Questions.push({
        phaseId: 4,
        assessmentQuestionId: id,
        priorityElement
      })
    })
    await queryInterface.bulkInsert('phase_questions', phase4Questions)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phase_questions', null, {});
  }
};
