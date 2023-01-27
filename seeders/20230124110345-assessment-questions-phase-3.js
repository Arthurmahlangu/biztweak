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
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a valid BBBEEE Sworn Affidavit/certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a valid Tax Clearance Certificate?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a business bank account?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Compliance and Certification',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Does your company sell online?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'Competitor analysis',
      type: '',
      phaseId: phase.id
    },{
      question: 'Do you know how to set up an online shop?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'eCommerce',
      type: '',
      phaseId: phase.id
    },
    {
      question: 'Do you know how to set up an online presence for your business?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'eCommerce',
      type: '',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated E-Commerce specialist?',
      yesAnswer: '',
      noAnswer: '',
      category: 'e-Commerce',
      module: 'JOB/JOB|eCommerce officer/specialist',
      type: '',
      phaseId: phase.id
    },



    {
      question: 'Do you know who your product is for?',
      yesAnswer: 'Customer profile has been determined.',
      noAnswer: 'Customer profile not determined',
      category: 'Customer Segments',
      module: 'Market Research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know who is your target market/audience?',
      yesAnswer: 'Target audience has been determined.',
      noAnswer: 'Target audience has not been selected',
      category: 'Customer Segments',
      module: 'Market Intelligence',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know where they are located?',
      yesAnswer: 'Target audience has been located geographically.',
      noAnswer: 'Target audience has not been located geographically',
      category: 'Customer Segments',
      module: 'Market research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know the Total market size?',
      yesAnswer: 'Target audience has been segmented.',
      noAnswer: 'Target audience has not been segmented.',
      category: 'Customer Segments',
      module: 'SAM SOM TAM',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is accessible?',
      yesAnswer: 'Total accessible market has been determined.',
      noAnswer: 'Total accessible market has not been determined',
      category: 'Customer Segments',
      module: 'Total Addressable market',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know how much of your market is in your region/locality?',
      yesAnswer: 'Total observable market has been determined.',
      noAnswer: 'Total observable market has not been determined.',
      category: 'Customer Segments',
      module: 'Market research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a profile for your ideal customer?',
      yesAnswer: 'Ideal customer profile has been determined.',
      noAnswer: 'Ideal customer profile has not been determined.',
      category: 'Customer Segments',
      module: 'Ideal customer profile',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know who your most important customers are?',
      yesAnswer: 'Most important not determined.',
      noAnswer: 'Most important customers not determined',
      category: 'Customer Segments',
      module: 'Market Research',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated Customer Researcher Specialist for this?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Customer Segments',
      module: 'JOB/JOB|Business Research Officer',
      type: 'Business concept',
      phaseId: phase.id
    },



    {
      question: 'Does the company have a defined business plan?',
      yesAnswer: 'There is a business plan that has been drafted.',
      noAnswer: 'No defined business plan.',
      category: 'Business and Customers',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Is the company executing the business plan?',
      yesAnswer: 'The company is currently executing the business plan.',
      noAnswer: 'No defined business plan.',
      category: 'Business and Customers',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Does the company measure client/customer satisfaction?',
      yesAnswer: 'Client satisfaction measured by the company',
      noAnswer: 'Client satisfaction not measured.',
      category: 'Business and Customers',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Can you rate the effectiveness of client/customer engagement?',
      yesAnswer: 'Customer engagement is measured',
      noAnswer: 'Effectiveness of customer engagement not measured.',
      category: 'Business and Customers',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Do the owners/executive management have sufficient experience in providing the product or service?',
      yesAnswer: 'Owners have the required experience.',
      noAnswer: "Owners don't have required experience.",
      category: 'Ownership and Mindset',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'The owners or management of the company are spending most of their time in the company?',
      yesAnswer: 'Owners work fulltime in the business.',
      noAnswer: 'Owners work part-time in the business.',
      category: 'Ownership and Mindset',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Are the educational qualifications or background experience sufficient to support the delivery of products or services offered?',
      yesAnswer: 'Expertise are enough to deliver on the product/service',
      noAnswer: 'Not enough expertise to deliver on products/service.',
      category: 'Ownership and Mindset',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Does the company advertise?',
      yesAnswer: 'The company does advertise',
      noAnswer: "The company doesn't advertise",
      category: 'Marketing and Sales',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Is the company’s advertising effective?',
      yesAnswer: 'Data on effectiveness of advertising is available.',
      noAnswer: 'Effectiveness of advertising not measured.',
      category: 'Marketing and Sales',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Does the company conduct sales planning and developed targets?',
      yesAnswer: 'Sales planning and targets are established.',
      noAnswer: 'Sales planning an dtargets not established.',
      category: 'Marketing and Sales',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a price strategy in place?',
      yesAnswer: 'There is a pricing strategy that is in place.',
      noAnswer: 'No price strategy in place',
      category: 'Marketing and Sales',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you review your pricing strategy often',
      yesAnswer: 'Pricing reviews done periodically.',
      noAnswer: 'Pricing review not done.',
      category: 'Marketing and Sales',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you have a designated employee appointed for Marketing & Sales?',
      yesAnswer: 'A dedicated person for sales has been appointed.',
      noAnswer: 'No dedicated person for sales',
      category: 'Marketing and Sales',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Does the company conduct market research?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Has the company actively identified a competitor in the market?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Has the company identified a key competitive advantage?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Do you know the company’s product or service differentiation?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },{
      question: 'Do you have a designated Market Researcher Specialist?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Market Intelligence',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Is there a defined process to pursue potential business opportunities?',
      yesAnswer: "There's a defined process to acquire clients",
      noAnswer: 'No defined processes',
      category: 'Delivery Expertise',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },{
      question: 'Does the company have the appropriate technical infrastructure to provide core business offerings?',
      yesAnswer: 'Materials & resources are enough to provide core offerings.',
      noAnswer: 'Materials & Resources not enough to provide core offerings.',
      category: 'Delivery Expertise',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Can the company show its experience in delivering the service or product?',
      yesAnswer: 'The company has experience in providing core offerings.',
      noAnswer: 'No prior experience in delivering offerings.',
      category: 'Delivery Expertise',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Does the company provide the required product training to employees?',
      yesAnswer: 'Training is provided to employees.',
      noAnswer: 'No training provided to employees.',
      category: 'Delivery Expertise',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Can you rank the employees’ level of skill to deliver the products or services?',
      yesAnswer: 'Skill level of employees is measured.',
      noAnswer: 'Employees skill not measured.',
      category: 'Delivery Expertise',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },
    {
      question: 'Does the company have dedicated and qualified people to deliver the products and services?',
      yesAnswer: 'The core offereings are delivered by qualified/dedicated persons.',
      noAnswer: 'No dedicated or qualified persons for delivery of offerings.',
      category: 'Delivery Expertise',
      module: '',
      type: 'Business structure',
      phaseId: phase.id
    },



    {
      question: 'Do you know the problem you are solving?',
      yesAnswer: 'Problem being solved has been determined.',
      noAnswer: 'Problem being solved not determined',
      category: 'Value Proposition',
      module: 'Value proposition canvas',
      type: 'Business concept',
      phaseId: phase.id
    },{
      question: 'Do you know what value you deliver to the customer?',
      yesAnswer: 'Value being delivered has been determined.',
      noAnswer: 'Value being delivered not determined.',
      category: 'Value Proposition',
      module: 'Business model canvas',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Are you aware of which customer needs you are satisfying?',
      yesAnswer: 'Customer needs have been determined.',
      noAnswer: 'Customer needs have not been determined.',
      category: 'Value Proposition',
      module: 'Value proposition canvas',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Can you describe the uniqueness of your product, and show key differences from existing alternatives?',
      yesAnswer: 'uniques selling point has been determined.',
      noAnswer: 'Uniques selling point not determined.',
      category: 'Value Proposition',
      module: 'Value proposition canvas',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you have an elevator pitch?',
      yesAnswer: 'An elevator pitch has been prepared.',
      noAnswer: 'No elevator pitch',
      category: 'Value Proposition',
      module: 'Elevator pitch template',
      type: 'Business concept',
      phaseId: phase.id
    },



    {
      question: 'Do you know the most important things you need to do to make your business model work?',
      yesAnswer: '',
      noAnswer: '',
      category: 'Key Activities',
      module: 'Process development',
      type: '',
      phaseId: phase.id
    },
    
    
    
    {
      question: 'Do you know how the problem you are solving is currently being addressed?',
      yesAnswer: 'The business is aware of current solutions from competitors.',
      noAnswer: 'The business is not aware of current solutions',
      category: 'Current Alternatives',
      module: 'Competitor analysis',
      type: 'Business concept',
      phaseId: phase.id
    },
    {
      question: 'Do you know who are the people currently solving this problem?',
      yesAnswer: 'The business is aware of its competitors',
      noAnswer: 'The business is not aware of its competitors',
      category: 'Current Alternatives',
      module: 'Competitor analysis',
      type: 'Business concept',
      phaseId: phase.id
    },
    


    {
      question: 'Do you know what strategic partnerships the company needs to form, to increase the scalability and efficiency of the business?',
      yesAnswer: 'Strategic partners have been determined.',
      noAnswer: 'Strategic partners have not been determined.',
      category: 'Key Partners',
      module: 'Boot Strapping Stratgey',
      type: 'Business concept',
      phaseId: phase.id
    },{
      question: 'Have you determined how each partnership will help the business?',
      yesAnswer: 'The value of strategic partnerships has been determined',
      noAnswer: 'Value of strategic partnerships not determined',
      category: 'Key Partners',
      module: 'Boot Strapping Stratgey',
      type: 'Business concept',
      phaseId: phase.id
    },




    {
      question: 'Do you know what infrastructure and resources you need in order to deliver the key activities?',
      yesAnswer: 'Key resources needed have been determined.',
      noAnswer: 'Key resources needed have not been determined',
      category: 'Key Resources',
      module: 'organizational design and development',
      type: 'Business concept',
      phaseId: phase.id
    }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
