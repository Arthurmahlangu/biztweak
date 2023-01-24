module.exports = {
  async up (queryInterface, Sequelize) {

    const phase = {
      id: 2
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
      question: 'Do you know the types of relationships you need to establish with your customer segments?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a process for retaining your customer base?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a system in place for growing your customer base?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a process for getting your customer base?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      companyPhaseId: phase.id
    },{
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you know how you are going to reach your customers?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
      companyPhaseId: phase.id
    },{
      question: 'Do you have a marketing plan in place?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
      companyPhaseId: phase.id
    },
    {
      question: 'Have you developed a network to reach your target audience?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you provide post-sales customer support?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
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
      question: 'Is there sufficient administration systems in place to help the company’s processes?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      companyPhaseId: phase.id
    },{
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


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
