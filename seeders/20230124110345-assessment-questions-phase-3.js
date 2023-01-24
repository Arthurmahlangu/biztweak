module.exports = {
  async up (queryInterface, Sequelize) {

    const phase = {
      id: 3
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
      question: 'Does your company sell online?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      companyPhaseId: phase.id
    },{
      question: 'Do you know how to set up an online shop?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how to set up an online presence for your business?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated E-Commerce specialist?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
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
      question: 'Does the company have a defined business plan?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      companyPhaseId: phase.id
    },
    {
      question: 'Is the company executing the business plan?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      companyPhaseId: phase.id
    },
    {
      question: 'Does the company measure client/customer satisfaction?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      companyPhaseId: phase.id
    },
    {
      question: 'Can you rate the effectiveness of client/customer engagement?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      companyPhaseId: phase.id
    },



    {
      question: 'Do the owners/executive management have sufficient experience in providing the product or service?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Ownership and Mindset',
      companyPhaseId: phase.id
    },
    {
      question: 'The owners or management of the company are spending most of their time in the company?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Ownership and Mindset',
      companyPhaseId: phase.id
    },
    {
      question: 'Are the educational qualifications or background experience sufficient to support the delivery of products or services offered?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Ownership and Mindset',
      companyPhaseId: phase.id
    },



    {
      question: 'Does the company advertise?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      companyPhaseId: phase.id
    },
    {
      question: 'Is the company’s advertising effective?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      companyPhaseId: phase.id
    },
    {
      question: 'Does the company conduct sales planning and developed targets?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a price strategy in place?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you review your pricing strategy often',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for Marketing & Sales?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      companyPhaseId: phase.id
    },



    {
      question: 'Does the company conduct market research?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      companyPhaseId: phase.id
    },
    {
      question: 'Has the company actively identified a competitor in the market?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      companyPhaseId: phase.id
    },
    {
      question: 'Has the company identified a key competitive advantage?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know the company’s product or service differentiation?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      companyPhaseId: phase.id
    },{
      question: 'Do you have a designated Market Researcher Specialist?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      companyPhaseId: phase.id
    },



    {
      question: 'Is there a defined process to pursue potential business opportunities?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Delivery Expertise',
      companyPhaseId: phase.id
    },{
      question: 'Does the company have the appropriate technical infrastructure to provide core business offerings?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Delivery Expertise',
      companyPhaseId: phase.id
    },
    {
      question: 'Can the company show its experience in delivering the service or product?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Delivery Expertise',
      companyPhaseId: phase.id
    },
    {
      question: 'Does the company provide the required product training to employees?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Delivery Expertise',
      companyPhaseId: phase.id
    },
    {
      question: 'Can you rank the employees’ level of skill to deliver the products or services?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Delivery Expertise',
      companyPhaseId: phase.id
    },
    {
      question: 'Does the company have dedicated and qualified people to deliver the products and services?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Delivery Expertise',
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
      question: 'Do you know the most important things you need to do to make your business model work?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Key Activities',
      companyPhaseId: phase.id
    },
    
    
    
    {
      question: 'Do you know how the problem you are solving is currently being addressed?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Current Alternatives',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know who are the people currently solving this problem?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Current Alternatives',
      companyPhaseId: phase.id
    },
    


    {
      question: 'Do you know what strategic partnerships the company needs to form, to increase the scalability and efficiency of the business?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Key Partners',
      companyPhaseId: phase.id
    },{
      question: 'Have you determined how each partnership will help the business?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Key Partners',
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
