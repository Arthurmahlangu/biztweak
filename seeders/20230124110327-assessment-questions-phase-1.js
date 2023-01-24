module.exports = {
  async up (queryInterface, Sequelize) {

    const phase = {
      id: 1
    }

    await queryInterface.bulkInsert('assessment_questions', [{
      question: 'Do you have a registered company with the CIPC?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a valid BBBEEE Sworn Affidavit/certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a valid Tax Clearance Certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a business bank account?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you have a prototype of the solution you are suggesting?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Prototype',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have the skills required to develop a prototype of the solution?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Prototype',
      companyPhaseId: phase.id
    },


    
    {
      question: 'Is there sufficient administration systems in place to help the company’s processes?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      companyPhaseId: phase.id
    },
    {
      question: 'Is the company’s organizational structure sufficient to support the delivery of products or services offered?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you know who your product is for?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know who is your target market/audience?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know where they are located?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know the Total market size?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },{
      question: 'Do you know how much of your market is in your region/locality?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know who your most important customers are?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      companyPhaseId: phase.id
    },



    {
      question: 'How are you generating revenue from each customer segment?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      companyPhaseId: phase.id
    },{
      question: 'Do you know the value that your customers are willing to pay for?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how your customers are currently paying?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how your customers prefer to pay?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you know the problem you are solving?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Value Proposition',
      companyPhaseId: phase.id
    },{
      question: 'Do you know what value you deliver to the customer?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Value Proposition',
      companyPhaseId: phase.id
    },
    {
      question: 'Are you aware of which customer needs you are satisfying?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Value Proposition',
      companyPhaseId: phase.id
    },
    {
      question: 'Can you describe the uniqueness of your product, and show key differences from existing alternatives?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Value Proposition',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have an elevator pitch?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Value Proposition',
      companyPhaseId: phase.id
    },



    {
      question: 'Have the costs involved in delivering the key activities been determined?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Cost Structure',
      companyPhaseId: phase.id
    },{
      question: 'Have the costs involved in acquiring the key resources been determined?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Cost Structure',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know the costs involved in maintaining customer relationships?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Cost Structure',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know the costs involved in determining and acquiring market segments?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Cost Structure',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated Accountant appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Cost Structure',
      companyPhaseId: phase.id
    },



    {
      question: 'Have you conducted a process of proving that your target audience is willing to pay for your service/product, at the price you want?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Proof of Concept',
      companyPhaseId: phase.id
    },


    {
      question: 'Do you know what infrastructure and resources you need in order to deliver the key activities?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Key Resources',
      companyPhaseId: phase.id
    }


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
