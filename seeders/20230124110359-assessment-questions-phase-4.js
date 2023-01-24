module.exports = {
  async up (queryInterface, Sequelize) {

    const phase = {
      id: 4
    }

    await queryInterface.bulkInsert('assessment_questions', [
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
        question: 'Non-disclosure agreement: A legal contract between two parties that outlines confidential, material, knowledge or information that the parties wish to share with one another for certain purposes, but wish to restrict access to or by third parties.',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        companyPhaseId: phase.id
      },
      {
        question: 'Services Agreement: A contract entered into by two parties where one agrees to provide a specified service to the other',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        companyPhaseId: phase.id
      },
      {
        question: 'Sub-contractor agreement: An agreement between a contractor and another party that is going to provide services/products to the contractor.',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        companyPhaseId: phase.id
      },
      {
        question: 'Joint venture/ teaming agree: This is an agreement that involves two or more parties combining resources to bid for a corporate or government contract.',
        yesAnswer: '',
        noAnswer: '',
        category: 'Legal Commercial Contracts Agreements',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you have paying customers?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Traction',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have letters of intent/interest?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Traction',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a Memorandum of Understanding in place?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Traction',
        companyPhaseId: phase.id
      },



      {
        question: 'Does the company perform budgeting and forecasting?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company perform reconciliations?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company implement cash flow management?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company document the financials of the business?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company have a dedicated person responsible for financial management?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a designated Accountant/Bookkeeper?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Financial Management',
        companyPhaseId: phase.id
      },



      {
        question: 'Have the costs involved in delivering the key activities been determined?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Cost Structure',
        companyPhaseId: phase.id
      },
      {
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
        question: 'Do you have a defined growth strategy with targeted growth areas?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Growth Strategy',
        companyPhaseId: phase.id
      },
      {
        question: 'Does the company invest sufficiently in product or service development?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Growth Strategy',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you document all the business processes?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Business processes are regularly reviewed and updated?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a method to manage deviations from documented business processes?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Are all business processes communicated to all company personnel?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        companyPhaseId: phase.id
      },
      {
        question: 'Do you have a designated employee appointed for this?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Business Process Management',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you perform employee satisfaction surveys?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Employee Satisfaction',
        companyPhaseId: phase.id
      },
      {
        question: 'Can you rank the level of employee satisfaction?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Employee Satisfaction',
        companyPhaseId: phase.id
      },



      {
        question: 'Do you know what infrastructure and resources you need in order to deliver the key activities?',
        yesAnswer: '',
        noAnswer: '',
        category: 'Key Resources',
        companyPhaseId: phase.id
      },


      
      {
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

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
