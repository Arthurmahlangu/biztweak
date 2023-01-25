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
      module: '',
      phaseId: phase.id
    },
    {
      question: 'Do you have a valid BBBEEE Sworn Affidavit/certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      phaseId: phase.id
    },
    {
      question: 'Do you have a valid Tax Clearance Certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      phaseId: phase.id
    },
    {
      question: 'Do you have a business bank account?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      phaseId: phase.id
    },



    {
      question: 'Do you have a prototype of the solution you are suggesting?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Prototype',
      module: '',
      phaseId: phase.id
    },
    {
      question: 'Do you have the skills required to develop a prototype of the solution?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Prototype',
      module: '',
      phaseId: phase.id
    },


    
    {
      question: 'Is there sufficient administration systems in place to help the company’s processes?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      module: '',
      phaseId: phase.id
    },
    {
      question: 'Is the company’s organizational structure sufficient to support the delivery of products or services offered?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Functional Capability',
      module: '',
      phaseId: phase.id
    },



    {
      question: 'Do you know who your product is for?',
      yesAnswer: 'Customer profile has been determined.',
      noAnswer: 'Customer profile not determined',
      category: 'Customer Segments',
      module: 'Market Research',
      phaseId: phase.id
    },
    {
      question: 'Do you know who is your target market/audience?',
      yesAnswer: 'Target audience has been determined.',
      noAnswer: 'Target audience has not been selected',
      category: 'Customer Segments',
      module: 'Market Intelligence',
      phaseId: phase.id
    },
    {
      question: 'Do you know where they are located?',
      yesAnswer: 'Target audience has been located geographically.',
      noAnswer: 'Target audience has not been located geographically',
      category: 'Customer Segments',
      module: 'Market research',
      phaseId: phase.id
    },
    {
      question: 'Do you know the Total market size?',
      yesAnswer: 'Target audience has been segmented.',
      noAnswer: 'Target audience has not been segmented.',
      category: 'Customer Segments',
      module: 'SAM SOM TAM',
      phaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is accessible?',
      yesAnswer: 'Total accessible market has been determined.',
      noAnswer: 'Total accessible market has not been determined',
      category: 'Customer Segments',
      module: 'Total Addressable market',
      phaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is in your region/locality?',
      yesAnswer: 'Total observable market has been determined.',
      noAnswer: 'Total observable market has not been determined.',
      category: 'Customer Segments',
      module: 'Market research',
      phaseId: phase.id
    },
    {
      question: 'Do you have a profile for your ideal customer?',
      yesAnswer: 'Ideal customer profile has been determined.',
      noAnswer: 'Ideal customer profile has not been determined.',
      category: 'Customer Segments',
      module: 'Ideal customer profile',
      phaseId: phase.id
    },
    {
      question: 'Do you know who your most important customers are?',
      yesAnswer: 'Most important not determined.',
      noAnswer: 'Most important customers not determined',
      category: 'Customer Segments',
      module: 'Market Research',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      module: 'JOB/JOB|Business Research Officer',
      phaseId: phase.id
    },



    {
      question: 'How are you generating revenue from each customer segment?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      module: 'Revenue models',
      phaseId: phase.id
    },
    {
      question: 'Do you know the value that your customers are willing to pay for?',
      yesAnswer: 'Value customers are willing to pay for has been determined',
      noAnswer: 'Value customers are willing to pay fpr not determined',
      category: 'Revenue Streams',
      module: 'Proof of concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how your customers are currently paying?',
      yesAnswer: 'Current payment trends of customers are known',
      noAnswer: 'Current payment trends of customers not known',
      category: 'Revenue Streams',
      module: 'Competitor analysis',
      phaseId: phase.id
    },
    {
      question: 'Do you know how your customers prefer to pay?',
      yesAnswer: 'Preferred paymet method of customers has been determined.',
      noAnswer: 'Preferred paymet method of customers not determined.',
      category: 'Revenue Streams',
      module: 'Market research, competitor analysis',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Revenue Streams',
      module: 'JOB/JOB|Business Strategist',
      phaseId: phase.id
    },



    {
      question: 'Do you know the problem you are solving?',
      yesAnswer: 'Problem being solved has been determined.',
      noAnswer: 'Problem being solved not determined',
      category: 'Value Proposition',
      module: 'Value proposition canvas',
      phaseId: phase.id
    },{
      question: 'Do you know what value you deliver to the customer?',
      yesAnswer: 'Value being delivered has been determined.',
      noAnswer: 'Value being delivered not determined.',
      category: 'Value Proposition',
      module: 'Business model canvas',
      phaseId: phase.id
    },
    {
      question: 'Are you aware of which customer needs you are satisfying?',
      yesAnswer: 'Customer needs have been determined.',
      noAnswer: 'Customer needs have not been determined.',
      category: 'Value Proposition',
      module: 'Value proposition canvas',
      phaseId: phase.id
    },
    {
      question: 'Can you describe the uniqueness of your product, and show key differences from existing alternatives?',
      yesAnswer: 'uniques selling point has been determined.',
      noAnswer: 'Uniques selling point not determined.',
      category: 'Value Proposition',
      module: 'Value proposition canvas',
      phaseId: phase.id
    },
    {
      question: 'Do you have an elevator pitch?',
      yesAnswer: 'An elevator pitch has been prepared.',
      noAnswer: 'No elevator pitch',
      category: 'Value Proposition',
      module: 'Elevator pitch template',
      phaseId: phase.id
    },



    {
      question: 'Have the costs involved in delivering the key activities been determined?',
      yesAnswer: 'Cos of sales has been determined.',
      noAnswer: 'Cost of sales not determined',
      category: 'Cost Structure',
      module: 'Costing, product & service pricing',
      phaseId: phase.id
    },{
      question: 'Have the costs involved in acquiring the key resources been determined?',
      yesAnswer: 'Cos of sales has been determined.',
      noAnswer: 'Cost of sales not determined',
      category: 'Cost Structure',
      module: 'Costing, product & service pricing',
      phaseId: phase.id
    },
    {
      question: 'Do you know the costs involved in maintaining customer relationships?',
      yesAnswer: 'Cost of customer retention not determined',
      noAnswer: 'Cost of customer retention not determined',
      category: 'Cost Structure',
      module: 'Costing, product & service pricing',
      phaseId: phase.id
    },
    {
      question: 'Do you know the costs involved in determining and acquiring market segments?',
      yesAnswer: 'cost of market penetration has been determined.',
      noAnswer: 'Cost of market penetration not determined',
      category: 'Cost Structure',
      module: 'Costing, product & service pricing',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated Accountant appointed for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Cost Structure',
      module: '',
      phaseId: phase.id
    },



    {
      question: 'Have you conducted a process of proving that your target audience is willing to pay for your service/product, at the price you want?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Proof of Concept',
      module: 'Proof of Concept',
      phaseId: phase.id
    },


    {
      question: 'Do you know what infrastructure and resources you need in order to deliver the key activities?',
      yesAnswer: 'Key resources needed have been determined.',
      noAnswer: 'Key resources needed have not been determined',
      category: 'Key Resources',
      module: 'organizational design and development',
      phaseId: phase.id
    }


    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
