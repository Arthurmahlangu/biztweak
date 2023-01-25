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
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a valid BBBEEE Sworn Affidavit/certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a valid Tax Clearance Certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a business bank account?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you know the types of relationships you need to establish with your customer segments?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      module: 'CRM',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a process for retaining your customer base?',
      yesAnswer: '',
      noAnswer: 'Sales Funnel',
      category: 'Customer relations',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a system in place for growing your customer base?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      module: 'CRM',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a process for getting your customer base?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      module: 'Sales planning, Customer acquistion plan',
      companyPhaseId: phase.id
    },{
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      module: '',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you know how you are going to reach your customers?',
      yesAnswer: 'Channels to reach customers are developed',
      noAnswer: 'Channels to reach customers not developed',
      category: 'Channels',
      module: 'Social media marketing, marketing plan, marketing startegy, sales funnel, customer acquisition plan',
      companyPhaseId: phase.id
    },{
      question: 'Do you have a marketing plan in place?',
      yesAnswer: 'Strategies to reach customers has been determined.',
      noAnswer: 'Strategies to reach customers not determined',
      category: 'Channels',
      module: 'marketing plan',
      companyPhaseId: phase.id
    },
    {
      question: 'Have you developed a network to reach your target audience?',
      yesAnswer: 'Network to reach target audience has been determined.',
      noAnswer: 'Network to to reach target audience not determined.',
      category: 'Channels',
      module: 'Sales funnel',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you provide post-sales customer support?',
      yesAnswer: 'Post sales support has been provided.',
      noAnswer: 'No post sales support provided',
      category: 'Channels',
      module: 'Sales personnel',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
      module: '',
      companyPhaseId: phase.id
    },



    {
      question: 'Does your company sell online?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'Competitor analysis',
      companyPhaseId: phase.id
    },{
      question: 'Do you know how to set up an online shop?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'eCommerce',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how to set up an online presence for your business?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'eCommerce',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated E-Commerce specialist?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'JOB/JOB|eCommerce officer/specialist',
      companyPhaseId: phase.id
    },



    {
      question: 'Is there sufficient administration systems in place to help the company’s processes?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      module: '',
      companyPhaseId: phase.id
    },{
      question: 'Is the company’s organizational structure sufficient to support the delivery of products or services offered?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      module: '',
      companyPhaseId: phase.id
    },



    {
      question: 'Do you know who your product is for?',
      yesAnswer: 'Customer profile has been determined.',
      noAnswer: 'Customer profile not determined',
      category: 'Customer Segments',
      module: 'Market Research',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know who is your target market/audience?',
      yesAnswer: 'Target audience has been determined.',
      noAnswer: 'Target audience has not been selected',
      category: 'Customer Segments',
      module: 'Market Intelligence',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know where they are located?',
      yesAnswer: 'Target audience has been located geographically.',
      noAnswer: 'Target audience has not been located geographically',
      category: 'Customer Segments',
      module: 'Market research',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know the Total market size?',
      yesAnswer: 'Target audience has been segmented.',
      noAnswer: 'Target audience has not been segmented.',
      category: 'Customer Segments',
      module: 'SAM SOM TAM',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is accessible?',
      yesAnswer: 'Total accessible market has been determined.',
      noAnswer: 'Total accessible market has not been determined',
      category: 'Customer Segments',
      module: 'Total Addressable market',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is in your region/locality?',
      yesAnswer: 'Total observable market has been determined.',
      noAnswer: 'Total observable market has not been determined.',
      category: 'Customer Segments',
      module: 'Market research',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a profile for your ideal customer?',
      yesAnswer: 'Ideal customer profile has been determined.',
      noAnswer: 'Ideal customer profile has not been determined.',
      category: 'Customer Segments',
      module: 'Ideal customer profile',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know who your most important customers are?',
      yesAnswer: 'Most important not determined.',
      noAnswer: 'Most important customers not determined',
      category: 'Customer Segments',
      module: 'Market Research',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      module: 'JOB/JOB|Business Research Officer',
      companyPhaseId: phase.id
    },



    {
      question: 'Does the company have a defined business plan?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Is the company executing the business plan?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Does the company measure client/customer satisfaction?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Can you rate the effectiveness of client/customer engagement?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Business and Customers',
      module: '',
      companyPhaseId: phase.id
    },



    {
      question: 'Does the company advertise?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Is the company’s advertising effective?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Does the company conduct sales planning and developed targets?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a price strategy in place?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you review your pricing strategy often',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for Marketing & Sales?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Marketing and Sales',
      module: '',
      companyPhaseId: phase.id
    },
    


    {
      question: 'How are you generating revenue from each customer segment?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      module: 'Revenue models',
      companyPhaseId: phase.id
    },{
      question: 'Do you know the value that your customers are willing to pay for?',
      yesAnswer: 'Value customers are willing to pay for has been determined',
      noAnswer: 'Value customers are willing to pay fpr not determined',
      category: 'Revenue Streams',
      module: 'Proof of concept',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how your customers are currently paying?',
      yesAnswer: 'Current payment trends of customers are known',
      noAnswer: 'Current payment trends of customers not known',
      category: 'Revenue Streams',
      module: 'Competitor analysis',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you know how your customers prefer to pay?',
      yesAnswer: 'Preferred paymet method of customers has been determined.',
      noAnswer: 'Preferred paymet method of customers not determined.',
      category: 'Revenue Streams',
      module: 'Market research, competitor analysis',
      companyPhaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      module: 'JOB/JOB|Business Strategist',
      companyPhaseId: phase.id
    },



    {
      question: 'Do the owners/executive management have sufficient experience in providing the product or service?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Ownership and Mindset',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'The owners or management of the company are spending most of their time in the company?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Ownership and Mindset',
      module: '',
      companyPhaseId: phase.id
    },
    {
      question: 'Are the educational qualifications or background experience sufficient to support the delivery of products or services offered?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Ownership and Mindset',
      module: '',
      companyPhaseId: phase.id
    },


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
