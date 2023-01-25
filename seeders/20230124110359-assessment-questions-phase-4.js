module.exports = {
  async up (queryInterface, Sequelize) {

    const phase = {
      id: 4
    }

    await queryInterface.bulkInsert('assessment_questions', [
      {
        question: 'Do you know how you are going to reach your customers?',
        yesAnswer: 'Channels to reach customers are developed',
        noAnswer: 'Channels to reach customers not developed',
        category: 'Channels',
        module: '',
        companyPhaseId: phase.id
      },{
        question: 'Do you have a marketing plan in place?',
        yesAnswer: 'Strategies to reach customers has been determined.',
        noAnswer: 'Strategies to reach customers not determined',
        category: 'Channels',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Have you developed a network to reach your target audience?',
        yesAnswer: 'Network to reach target audience has been determined.',
        noAnswer: 'Network to to reach target audience not determined.',
        category: 'Channels',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you provide post-sales customer support?',
        yesAnswer: 'Post sales support has been provided.',
        noAnswer: 'No post sales support provided',
        category: 'Channels',
        module: '',
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
        question: 'Is there sufficient administration systems in place to help the company’s processes?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Functional Capability',
        module: '',
        companyPhaseId: phase.id
      },
      {
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
        question: 'Do you know the problem you are solving?',
        yesAnswer: 'Problem being solved has been determined.',
        noAnswer: 'Problem being solved not determined',
        category: 'Value Proposition',
        module: 'Value proposition canvas',
        companyPhaseId: phase.id
      },{
        question: 'Do you know what value you deliver to the customer?',
        yesAnswer: 'Value being delivered has been determined.',
        noAnswer: 'Value being delivered not determined.',
        category: 'Value Proposition',
        module: 'Business model canvas',
        companyPhaseId: phase.id
      },
      {
        question: 'Are you aware of which customer needs you are satisfying?',
        yesAnswer: 'Customer needs have been determined.',
        noAnswer: 'Customer needs have not been determined.',
        category: 'Value Proposition',
        module: 'Value proposition canvas',
        companyPhaseId: phase.id
      },
      {
        question: 'Can you describe the uniqueness of your product, and show key differences from existing alternatives?',
        yesAnswer: 'uniques selling point has been determined.',
        noAnswer: 'Uniques selling point not determined.',
        category: 'Value Proposition',
        module: 'Value proposition canvas',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have an elevator pitch?',
        yesAnswer: 'An elevator pitch has been prepared.',
        noAnswer: 'No elevator pitch',
        category: 'Value Proposition',
        module: 'Elevator pitch template',
        companyPhaseId: phase.id
      },
    
    
    
      {
        question: 'Do you know how the problem you are solving is currently being addressed?',
        yesAnswer: 'The business is aware of current solutions from competitors.',
        noAnswer: 'The business is not aware of current solutions',
        category: 'Current Alternatives',
        module: 'Competitor analysis',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you know who are the people currently solving this problem?',
        yesAnswer: 'The business is aware of its competitors',
        noAnswer: 'The business is not aware of its competitors',
        category: 'Current Alternatives',
        module: 'Competitor analysis',
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



      {
        question: 'Do you know what strategic partnerships the company needs to form, to increase the scalability and efficiency of the business?',
        yesAnswer: 'Strategic partners have been determined.',
        noAnswer: 'Strategic partners have not been determined.',
        category: 'Key Partners',
        module: 'Boot Strapping Stratgey',
        companyPhaseId: phase.id
      },{
        question: 'Have you determined how each partnership will help the business?',
        yesAnswer: 'The value of strategic partnerships has been determined',
        noAnswer: 'Value of strategic partnerships not determined',
        category: 'Key Partners',
        module: 'Boot Strapping Stratgey',
        companyPhaseId: phase.id
      },



      {
        question: 'Non-disclosure agreement: A legal contract between two parties that outlines confidential, material, knowledge or information that the parties wish to share with one another for certain purposes, but wish to restrict access to or by third parties.',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Services Agreement: A contract entered into by two parties where one agrees to provide a specified service to the other',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Sub-contractor agreement: An agreement between a contractor and another party that is going to provide services/products to the contractor.',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Joint venture/ teaming agree: This is an agreement that involves two or more parties combining resources to bid for a corporate or government contract.',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you have paying customers?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Traction',
        module: 'Sales Funnel',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have letters of intent/interest?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Traction',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a Memorandum of Understanding in place?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Traction',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Does the company perform budgeting and forecasting?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company perform reconciliations?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company implement cash flow management?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company document the financials of the business?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company have a dedicated person responsible for financial management?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a designated Accountant/Bookkeeper?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Have the costs involved in delivering the key activities been determined?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Cost Structure',
        module: 'Costing, product & service pricing',
        companyPhaseId: phase.id
      },
      {
        question: 'Have the costs involved in acquiring the key resources been determined?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Cost Structure',
        module: 'Costing, product & service pricing',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you know the costs involved in maintaining customer relationships?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Cost Structure',
        module: 'Costing, product & service pricing',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you know the costs involved in determining and acquiring market segments?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Cost Structure',
        module: 'Costing, product & service pricing',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a designated Accountant appointed for this?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Cost Structure',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you have a defined growth strategy with targeted growth areas?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Growth Strategy',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company invest sufficiently in product or service development?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Growth Strategy',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you document all the business processes?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Business processes are regularly reviewed and updated?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a method to manage deviations from documented business processes?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Are all business processes communicated to all company personnel?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a designated employee appointed for this?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you perform employee satisfaction surveys?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Employee Satisfaction',
        module: '',
        companyPhaseId: phase.id
      },
      {
        question: 'Can you rank the level of employee satisfaction?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Employee Satisfaction',
        module: '',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you know what infrastructure and resources you need in order to deliver the key activities?',
        yesAnswer: 'Key resources needed have been determined.',
        noAnswer: 'Key resources needed have not been determined',
        category: 'Key Resources',
        module: 'organizational design and development',
        companyPhaseId: phase.id
      },


      
      {
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

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
