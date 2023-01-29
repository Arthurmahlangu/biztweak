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
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a valid BBBEEE Sworn Affidavit/certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a valid Tax Clearance Certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a business bank account?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Do you know the types of relationships you need to establish with your customer segments?',
      yesAnswer: 'Customer relationship management has been established.',
      noAnswer: 'Customer relationship management not established.',
      category: 'Customer relations',
      modules: '',
      topics: 'CRM',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a process for retaining your customer base?',
      yesAnswer: 'Processes for acquiring customers are established.',
      noAnswer: 'Processes for acquiring customers are not established.',
      category: 'Customer relations',
      modules: '',
      topics: 'Sales funel',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a system in place for growing your customer base?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer relations',
      modules: '',
      topics: 'CRM',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a process for getting your customer base?',
      yesAnswer: 'Processes in place for retaining customers.',
      noAnswer: 'No processes in place for retaining customers',
      category: 'Customer relations',
      modules: '',
      topics: 'Sales planning, Customer acquistion plan',
      type: 'Business concept',
      phaseId: phase.id
    },{
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: 'No systems in place for  growing customers.',
      noAnswer: 'No systems in place for growing customers',
      category: 'Customer relations',
      modules: '',
      topics: '',
      type: 'Business concept',
      phaseId: phase.id
    },



    {
      question: 'Do you know how you are going to reach your customers?',
      yesAnswer: 'Channels to reach customers are developed',
      noAnswer: 'Channels to reach customers not developed',
      category: 'Channels',
      modules: '',
      topics: 'Social media marketing, marketing plan, marketing startegy, sales funnel, customer acquisition plan',
      type: 'Business concept',
      phaseId: phase.id
    },{
      question: 'Do you have a marketing plan in place?',
      yesAnswer: 'Strategies to reach customers has been determined.',
      noAnswer: 'Strategies to reach customers not determined',
      category: 'Channels',
      modules: '',
      topics: 'marketing plan',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Have you developed a network to reach your target audience?',
      yesAnswer: 'Network to reach target audience has been determined.',
      noAnswer: 'Network to to reach target audience not determined.',
      category: 'Channels',
      modules: '',
      topics: 'Sales funnel',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you provide post-sales customer support?',
      yesAnswer: 'Post sales support has been provided.',
      noAnswer: 'No post sales support provided',
      category: 'Channels',
      modules: '',
      topics: 'Sales personnel',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Channels',
      modules: '',
      topics: '',
      type: 'Business concept',
      phaseId: phase.id
    },



    {
      question: 'Does your company sell online?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      modules: '',
      topics: 'Competitor analysis',
      type: '',
      phaseId: phase.id
    },{
      question: 'Do you know how to set up an online shop?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      modules: '',
      topics: 'eCommerce',
      type: '',
      phaseId: phase.id
    },
    {
      question: 'Do you know how to set up an online presence for your business?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      modules: '',
      topics: 'eCommerce',
      type: '',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated E-Commerce specialist?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      modules: '',
      topics: 'JOB/JOB|eCommerce officer/specialist',
      type: '',
      phaseId: phase.id
    },



    {
      question: 'Is there sufficient administration systems in place to help the company’s processes?',
      yesAnswer: "There is an administration system that's in use in the company.",
      noAnswer: 'No administration systems in place.',
      category: 'Functional Capability',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },{
      question: 'Is the company’s organizational structure sufficient to support the delivery of products or services offered?',
      yesAnswer: 'Organizational structure is sufficient to deliver on product/service',
      noAnswer: 'Organizational structure not sufficient.',
      category: 'Functional Capability',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Do you know who your product is for?',
      yesAnswer: 'Customer profile has been determined.',
      noAnswer: 'Customer profile not determined',
      category: 'Customer Segments',
      modules: '',
      topics: 'Market Research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know who is your target market/audience?',
      yesAnswer: 'Target audience has been determined.',
      noAnswer: 'Target audience has not been selected',
      category: 'Customer Segments',
      modules: '',
      topics: 'Market Intelligence',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know where they are located?',
      yesAnswer: 'Target audience has been located geographically.',
      noAnswer: 'Target audience has not been located geographically',
      category: 'Customer Segments',
      modules: '',
      topics: 'Market research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know the Total market size?',
      yesAnswer: 'Target audience has been segmented.',
      noAnswer: 'Target audience has not been segmented.',
      category: 'Customer Segments',
      modules: '',
      topics: 'SAM SOM TAM',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is accessible?',
      yesAnswer: 'Total accessible market has been determined.',
      noAnswer: 'Total accessible market has not been determined',
      category: 'Customer Segments',
      modules: '',
      topics: 'Total Addressable market',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is in your region/locality?',
      yesAnswer: 'Total observable market has been determined.',
      noAnswer: 'Total observable market has not been determined.',
      category: 'Customer Segments',
      modules: '',
      topics: 'Market research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a profile for your ideal customer?',
      yesAnswer: 'Ideal customer profile has been determined.',
      noAnswer: 'Ideal customer profile has not been determined.',
      category: 'Customer Segments',
      modules: '',
      topics: 'Ideal customer profile',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know who your most important customers are?',
      yesAnswer: 'Most important not determined.',
      noAnswer: 'Most important customers not determined',
      category: 'Customer Segments',
      modules: '',
      topics: 'Market Research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      modules: '',
      topics: 'JOB/JOB|Business Research Officer',
      type: 'Business concept',
      phaseId: phase.id
    },



    {
      question: 'Does the company have a defined business plan?',
      yesAnswer: 'There is a business plan that has been drafted. ',
      noAnswer: 'No defined business plan.',
      category: 'Business and Customers',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Is the company executing the business plan?',
      yesAnswer: 'The company is currently executing the business plan.',
      noAnswer: 'No defined business plan.',
      category: 'Business and Customers',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Does the company measure client/customer satisfaction?',
      yesAnswer: 'Client satisfaction measured by the company',
      noAnswer: 'Client satisfaction not measured.',
      category: 'Business and Customers',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Can you rate the effectiveness of client/customer engagement?',
      yesAnswer: 'Customer engagement is measured',
      noAnswer: 'Effectiveness of customer engagement not measured.',
      category: 'Business and Customers',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Does the company advertise?',
      yesAnswer: 'The company does advertise',
      noAnswer: "The company doesn't advertise",
      category: 'Marketing and Sales',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Is the company’s advertising effective?',
      yesAnswer: 'Data on effectiveness of advertising is available.',
      noAnswer: 'Effectiveness of advertising not measured.',
      category: 'Marketing and Sales',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Does the company conduct sales planning and developed targets?',
      yesAnswer: 'Sales planning and targets are established.',
      noAnswer: 'Sales planning and targets not established.',
      category: 'Marketing and Sales',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a price strategy in place?',
      yesAnswer: 'There is a pricing strategy that is in place.',
      noAnswer: 'No price strategy in place',
      category: 'Marketing and Sales',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you review your pricing strategy often',
      yesAnswer: 'Pricing reviews done periodically.',
      noAnswer: 'Pricing review not done.',
      category: 'Marketing and Sales',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for Marketing & Sales?',
      yesAnswer: 'A dedicated person for sales has been appointed.',
      noAnswer: 'No dedicated person for sales',
      category: 'Marketing and Sales',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    


    {
      question: 'How are you generating revenue from each customer segment?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      modules: '',
      topics: 'Revenue models',
      type: 'Business concept',
      phaseId: phase.id
    },{
      question: 'Do you know the value that your customers are willing to pay for?',
      yesAnswer: 'Value customers are willing to pay for has been determined',
      noAnswer: 'Value customers are willing to pay fpr not determined',
      category: 'Revenue Streams',
      modules: '',
      topics: 'Proof of concept',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how your customers are currently paying?',
      yesAnswer: 'Current payment trends of customers are known',
      noAnswer: 'Current payment trends of customers not known',
      category: 'Revenue Streams',
      modules: '',
      topics: 'Competitor analysis',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how your customers prefer to pay?',
      yesAnswer: 'Preferred paymet method of customers has been determined.',
      noAnswer: 'Preferred paymet method of customers not determined.',
      category: 'Revenue Streams',
      modules: '',
      topics: 'Market research, competitor analysis',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      modules: '',
      topics: 'JOB/JOB|Business Strategist',
      type: 'Business concept',
      phaseId: phase.id
    },



    {
      question: 'Do the owners/executive management have sufficient experience in providing the product or service?',
      yesAnswer: 'Owners have the required experience.',
      noAnswer: "Owners don't have required experience.",
      category: 'Ownership and Mindset',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'The owners or management of the company are spending most of their time in the company?',
      yesAnswer: 'Owners work fulltime in the business.',
      noAnswer: 'Owners work part-time in the business.',
      category: 'Ownership and Mindset',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Are the educational qualifications or background experience sufficient to support the delivery of products or services offered?',
      yesAnswer: 'Expertise are enough to deliver on the product/service',
      noAnswer: 'Not enough expertise to deliver on products/service.',
      category: 'Ownership and Mindset',
      modules: '',
      topics: '',
      type: 'Business structure',
      phaseId: phase.id
    },


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
