'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('assessment_questions', 
    [
      {
        question: "Do you have a registered company with the CIPC?",
        yesAnswer: "",
        noAnswer: "",
        category: "Compliance and Certification",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a valid BBBEEE Sworn Affidavit/certificate?",
        yesAnswer: "",
        noAnswer: "",
        category: "Compliance and Certification",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a valid Tax Clearance Certificate?",
        yesAnswer: "",
        noAnswer: "",
        category: "Compliance and Certification",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a business bank account?",
        yesAnswer: "",
        noAnswer: "",
        category: "Compliance and Certification",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Are you registered on the CSD database under the Treasury Department?",
        yesAnswer: "",
        noAnswer: "",
        category: "Compliance and Certification",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you have a prototype of the solution you are suggesting?",
        yesAnswer: "",
        noAnswer: "",
        category: "Prototype",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have the skills required to develop a prototype of the solution?",
        yesAnswer: "",
        noAnswer: "",
        category: "Prototype",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Is there sufficient administration systems in place to help the company’s processes?",
        yesAnswer: "There is an administration system that's in use in the company.",
        noAnswer: "No administration systems in place.",
        category: "Functional Capability",
        modules: "Business Process Management",
        topics: "Process Development & Documentation",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Is the company’s organizational structure sufficient to support the delivery of products or services offered?",
        yesAnswer: "Organizational structure is sufficient to deliver on product/service",
        noAnswer: "Organizational structure not sufficient.",
        category: "Functional Capability",
        modules: "Business Process Management",
        topics: "Process Development & Documentation",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you know who your product is for?",
        yesAnswer: "Customer profile has been determined.",
        noAnswer: "Customer profile not determined",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "Market Research",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know who is your target market/audience?",
        yesAnswer: "Target audience has been determined.",
        noAnswer: "Target audience has not been selected",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "Market Intelligence",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know where they are located?",
        yesAnswer: "Target audience has been located geographically.",
        noAnswer: "Target audience has not been located geographically",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "Market Research",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know the Total market size?",
        yesAnswer: "Target audience has been segmented.",
        noAnswer: "Target audience has not been segmented.",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "SAM SOM TAM",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know how much of your market is accessible?",
        yesAnswer: "Total accessible market has been determined.",
        noAnswer: "Total accessible market has not been determined",
        category: "Customer Segments",
        modules: "",
        topics: "Total Addressable Market",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know how much of your market is in your region/locality?",
        yesAnswer: "Total observable market has been determined.",
        noAnswer: "Total observable market has not been determined.",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "Market Research",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a profile for your ideal customer?",
        yesAnswer: "Ideal customer profile has been determined.",
        noAnswer: "Ideal customer profile has not been determined.",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "Ideal Customer Profile",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know who your most important customers are?",
        yesAnswer: "Most important not determined.",
        noAnswer: "Most important customers not determined",
        category: "Customer Segments",
        modules: "Market Intelligence",
        topics: "Market Research",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated Customer Researcher Specialist for this?",
        yesAnswer: "",
        noAnswer: "",
        category: "Customer Segments",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: "Customer Research Specialist"
      },



      {
        question: "How are you generating revenue from each customer segment?",
        yesAnswer: "",
        noAnswer: "",
        category: "Revenue Streams",
        modules: "Strategic planning",
        topics: "Revenue models",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know the value that your customers are willing to pay for?",
        yesAnswer: "Value customers are willing to pay for has been determined",
        noAnswer: "Value customers are willing to pay fpr not determined",
        category: "Revenue Streams",
        modules: "",
        topics: "",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know how your customers are currently paying?",
        yesAnswer: "Current payment trends of customers are known",
        noAnswer: "Current payment trends of customers not known",
        category: "Revenue Streams",
        modules: "Market Intelligence",
        topics: "Competitor Analysis",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know how your customers prefer to pay?",
        yesAnswer: "Preferred paymet method of customers has been determined.",
        noAnswer: "Preferred paymet method of customers not determined.",
        category: "Revenue Streams",
        modules: "Market Intelligence",
        topics: "Market Research, Competitor Analysis",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated employee appointed for this?",
        yesAnswer: "",
        noAnswer: "",
        category: "Revenue Streams",
        modules: "",
        topics: "",
        type: "Business Concept",
        recommendedJobOrSkills: "Business Analyst"
      },



      {
        question: "Do you know the problem you are solving?",
        yesAnswer: "Problem being solved has been determined.",
        noAnswer: "Problem being solved not determined",
        category: "Value Proposition",
        modules: "Strategic planning",
        topics: "Value Proposition Canvas",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know what value you deliver to the customer?",
        yesAnswer: "Value being delivered has been determined.",
        noAnswer: "Value being delivered not determined.",
        category: "Value Proposition",
        modules: "",
        topics: "Business Model Canvas",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Are you aware of which customer needs you are satisfying?",
        yesAnswer: "Customer needs have been determined.",
        noAnswer: "Customer needs have not been determined.",
        category: "Value Proposition",
        modules: "Strategic planning",
        topics: "Value Proposition Canvas",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Can you describe the uniqueness of your product, and show key differences from existing alternatives?",
        yesAnswer: "uniques selling point has been determined.",
        noAnswer: "Uniques selling point not determined.",
        category: "Value Proposition",
        modules: "Strategic planning",
        topics: "Value Proposition Canvas",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have an elevator pitch?",
        yesAnswer: "An elevator pitch has been prepared.",
        noAnswer: "No elevator pitch",
        category: "Value Proposition",
        modules: "",
        topics: "Elevator Pitch Template",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },



      {
        question: "Have the costs involved in delivering the key activities been determined?",
        yesAnswer: "Cos of sales has been determined.",
        noAnswer: "Cost of sales not determined",
        category: "Cost Structure",
        modules: "Financial Management, Marketing and Sales",
        topics: "Costing, Product/Service Pricing",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Have the costs involved in acquiring the key resources been determined?",
        yesAnswer: "Cos of sales has been determined.",
        noAnswer: "Cost of sales not determined",
        category: "Cost Structure",
        modules: "Financial Management, Marketing and Sales",
        topics: "Costing, Product/Service Pricing",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know the costs involved in maintaining customer relationships?",
        yesAnswer: "Cost of customer retention not determined",
        noAnswer: "Cost of customer retention not determined",
        category: "Cost Structure",
        modules: "Financial Management, Marketing and Sales",
        topics: "Costing, Product/Service Pricing",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know the costs involved in determining and acquiring market segments?",
        yesAnswer: "cost of market penetration has been determined.",
        noAnswer: "Cost of market penetration not determined",
        category: "Cost Structure",
        modules: "Financial Management, Marketing and Sales",
        topics: "Costing, Product/Service Pricing",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated Accountant appointed for this?",
        yesAnswer: "",
        noAnswer: "",
        category: "Cost Structure",
        modules: "",
        topics: "",
        type: "Business Concept",
        recommendedJobOrSkills: "Accountant"
      },



      {
        question: "Have you conducted a process of proving that your target audience is willing to pay for your service/product, at the price you want?",
        yesAnswer: "Ideal customer experience has been determined.",
        noAnswer: "Ideal customer experience has not been determined.",
        category: "Proof of Concept",
        modules: "Market Intelligence",
        topics: "Proof of Concept",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you know what infrastructure and resources you need in order to deliver the key activities?",
        yesAnswer: "",
        noAnswer: "",
        category: "Key Resources",
        modules: "Talent Management",
        topics: "Organisation Design and Development",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you know the types of relationships you need to establish with your customer segments?",
        yesAnswer: "Customer relationship management has been established.",
        noAnswer: "Customer relationship management not established.",
        category: "Customer relations",
        modules: "Strategic Planning",
        topics: "CRM",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a process for retaining your customer base?",
        yesAnswer: "Processes for acquiring customers are established.",
        noAnswer: "Processes for acquiring customers are not established.",
        category: "Customer relations",
        modules: "Marketing and Sales",
        topics: "Sales Funnel",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a system in place for growing your customer base?",
        yesAnswer: "Processes in place for retaining customers.",
        noAnswer: "No processes in place for retaining customers",
        category: "Customer relations",
        modules: "Strategic Planning",
        topics: "CRM",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a process for getting your customer base?",
        yesAnswer: "No systems in place for  growing customers.",
        noAnswer: "No systems in place for growing customers",
        category: "Customer relations",
        modules: "Marketing and Sales, ",
        topics: "Sales Planning, Customer Acqusition Plan",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated Customer Researcher Specialist for this?",
        yesAnswer: "",
        noAnswer: "",
        category: "Customer relations",
        modules: "",
        topics: "",
        type: "Business Concept",
        recommendedJobOrSkills: "Customer Research Specialist"
      },



      {
        question: "Do you know how you are going to reach your customers?",
        yesAnswer: "Channels to reach customers are developed",
        noAnswer: "Channels to reach customers not developed",
        category: "Channels",
        modules: "Market Intelligence",
        topics: "Social Media Marketing, Marketing Plan, Marketing Strategy, Sales Funnel, Customer Acqusition Plan",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a marketing plan in place?",
        yesAnswer: "Strategies to reach customers has been determined.",
        noAnswer: "Strategies to reach customers not determined",
        category: "Channels",
        modules: "Marketing and Sales",
        topics: "Marketing Plan",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Have you developed a network to reach your target audience?",
        yesAnswer: "Network to reach target audience has been determined.",
        noAnswer: "Network to to reach target audience not determined.",
        category: "Channels",
        modules: "Marketing and Sales",
        topics: "Sales Funnel",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you provide post-sales customer support?",
        yesAnswer: "Post sales support has been provided.",
        noAnswer: "No post sales support provided",
        category: "Channels",
        modules: "Marketing and Sales",
        topics: "Sales Personnel",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated employee appointed for this?",
        yesAnswer: "",
        noAnswer: "",
        category: "Channels",
        modules: "",
        topics: "",
        type: "Business Concept",
        recommendedJobOrSkills: "Business strategist/Marketing Manager"
      },



      {
        question: "Does your company sell online?",
        yesAnswer: "",
        noAnswer: "",
        category: "e-Commerce",
        modules: "Market Intelligence",
        topics: "Competitor Analysis",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know how to set up an online shop?",
        yesAnswer: "",
        noAnswer: "",
        category: "e-Commerce",
        modules: "",
        topics: "eCommerce",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know how to set up an online presence for your business?",
        yesAnswer: "",
        noAnswer: "",
        category: "e-Commerce",
        modules: "",
        topics: "eCommerce",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated E-Commerce specialist?",
        yesAnswer: "",
        noAnswer: "",
        category: "e-Commerce",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: "e-Commerce Specialist"
      },



      {
        question: "Does the company have a defined business plan?",
        yesAnswer: "There is a business plan that has been drafted.",
        noAnswer: "No defined business plan.",
        category: "Business and Customers",
        modules: "",
        topics: "Business Plan",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Is the company executing the business plan?",
        yesAnswer: "The company is currently executing the business plan.",
        noAnswer: "No defined business plan.",
        category: "Business and Customers",
        modules: "",
        topics: "Business Plan",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company measure client/customer satisfaction?",
        yesAnswer: "Client satisfaction measured by the company",
        noAnswer: "Client satisfaction not measured.",
        category: "Business and Customers",
        modules: "Strategic Planning",
        topics: "CRM",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Can you rate the effectiveness of client/customer engagement?",
        yesAnswer: "Customer engagement is measured",
        noAnswer: "Effectiveness of customer engagement not measured.",
        category: "Business and Customers",
        modules: "Strategic Planning, Marketing and Sales",
        topics: "CRM, Monitoring and Evaluation",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Does the company advertise?",
        yesAnswer: "The company does advertise",
        noAnswer: "The company doesn't advertise",
        category: "Marketing and Sales",
        modules: "Marketing and Sales",
        topics: "Marketing Plan, Social Media Marketing",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Is the company’s advertising effective?",
        yesAnswer: "Data on effectiveness of advertising is available.",
        noAnswer: "Effectiveness of advertising not measured.",
        category: "Marketing and Sales",
        modules: "Marketing and Sales",
        topics: "Monitoring & Evaluation",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company conduct sales planning and developed targets?",
        yesAnswer: "Sales planning and targets are established.",
        noAnswer: "Sales planning an dtargets not established.",
        category: "Marketing and Sales",
        modules: "Marketing and Sales",
        topics: "Sales Planning",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a price strategy in place?",
        yesAnswer: "There is a pricing strategy that is in place.",
        noAnswer: "No price strategy in place",
        category: "Marketing and Sales",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you review your pricing strategy often?",
        yesAnswer: "Pricing reviews done periodically.",
        noAnswer: "Pricing review not done.",
        category: "Marketing and Sales",
        modules: "Financial Management, Marketing and Sales",
        topics: "Product/Service Pricing, Costing",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated employee appointed for Marketing & Sales?",
        yesAnswer: "A dedicated person for sales has been appointed.",
        noAnswer: "No dedicated person for sales",
        category: "Marketing and Sales",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do the owners/executive management have sufficient experience in providing the product or service?",
        yesAnswer: "Owners have the required experience.",
        noAnswer: "Owners don't have required experience.",
        category: "Ownership and Mindset",
        modules: "Talent Management",
        topics: "Founder Skills & Expertise",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "The owners or management of the company are spending most of their time in the company?",
        yesAnswer: "Owners work fulltime in the business.",
        noAnswer: "Owners work part-time in the business.",
        category: "Ownership and Mindset",
        modules: "Talent Management",
        topics: "Owner & Management Commitment",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Are the educational qualifications or background experience sufficient to support the delivery of products or services offered?",
        yesAnswer: "Expertise are enough to deliver on the product/service",
        noAnswer: "Not enough expertise to deliver on products/service.",
        category: "Ownership and Mindset",
        modules: "Talent Management",
        topics: "Founder Skills & Expertise",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Does the company conduct market research?",
        yesAnswer: "",
        noAnswer: "",
        category: "Market Intelligence",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Has the company actively identified a competitor in the market?",
        yesAnswer: "",
        noAnswer: "",
        category: "Market Intelligence",
        modules: "Market Intelligence",
        topics: "Competitor Analysis",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Has the company identified a key competitive advantage?",
        yesAnswer: "",
        noAnswer: "",
        category: "Market Intelligence",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know the company’s product or service differentiation?",
        yesAnswer: "",
        noAnswer: "",
        category: "Market Intelligence",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated Market Researcher Specialist?",
        yesAnswer: "",
        noAnswer: "",
        category: "Market Intelligence",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Is there a defined process to pursue potential business opportunities?",
        yesAnswer: "There's a defined process to acquire clients.",
        noAnswer: "No defined processes",
        category: "Delivery Expertise",
        modules: "Marketing and Sales",
        topics: "Customer Acqusition Plan",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company have the appropriate technical infrastructure to provide core business offerings?",
        yesAnswer: "Materials & resources are enough to provide core offerings.",
        noAnswer: "Materials & Resources not enough to provide core offerings.",
        category: "Delivery Expertise",
        modules: "Product Development",
        topics: "Equipment & Materials",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Can the company show its experience in delivering the service or product?",
        yesAnswer: "The company has experience in providing core offerings.",
        noAnswer: "No prior experience in delivering offerings.",
        category: "Delivery Expertise",
        modules: "Strategic Planning",
        topics: "CRM",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company provide the required product training to employees?",
        yesAnswer: "Training is provided to employees.",
        noAnswer: "No training provided to employees.",
        category: "Delivery Expertise",
        modules: "Talent Management",
        topics: "Training & Content Development",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Can you rank the employees’ level of skill to deliver the products or services?",
        yesAnswer: "Skill level of employees is measured.",
        noAnswer: "Employees skill not measured.",
        category: "Delivery Expertise",
        modules: "Talent Management",
        topics: "Employee Skills & Performance",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company have dedicated and qualified people to deliver the products and services?",
        yesAnswer: "The core offereings are delivered by qualified/dedicated persons.",
        noAnswer: "No dedicated or qualified persons for delivery of offerings.",
        category: "Delivery Expertise",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you know the most important things you need to do to make your business model work?",
        yesAnswer: "",
        noAnswer: "",
        category: "Key Activities",
        modules: "Business Process Management",
        topics: "Process Development",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you know how the problem you are solving is currently being addressed?",
        yesAnswer: "The business is aware of current solutions from competitors.",
        noAnswer: "The business is not aware of current solutions",
        category: "Current Alternatives",
        modules: "Market Intelligence",
        topics: "Competitor Analysis",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you know who are the people currently solving this problem?",
        yesAnswer: "The business is aware of its competitors",
        noAnswer: "The business is not aware of its competitors",
        category: "Current Alternatives",
        modules: "Market Intelligence",
        topics: "Competitor Analysis",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you know what strategic partnerships the company needs to form, to increase the scalability and efficiency of the business?",
        yesAnswer: "Strategic partners have been determined.",
        noAnswer: "Strategic partners have not been determined.",
        category: "Key Partners",
        modules: "Strategic Planning",
        topics: "Boot Strapping Strategy",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },
      {
        question: "Have you determined how each partnership will help the business?",
        yesAnswer: "The value of strategic partnerships has been determined",
        noAnswer: "Value of strategic partnerships not determined",
        category: "Key Partners",
        modules: "Strategic Planning",
        topics: "Boot Strapping Strategy",
        type: "Business Concept",
        recommendedJobOrSkills: ""
      },



      {
        question: "Non-disclosure agreement: A legal contract between two parties that outlines confidential, material, knowledge or information that the parties wish to share with one another for certain purposes, but wish to restrict access to or by third parties.",
        yesAnswer: "NDA is available",
        noAnswer: "No draft NDA",
        category: "Legal Commercial Contracts Agreements",
        modules: "",
        topics: "Corporate Law",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Services Agreement: A contract entered into by two parties where one agrees to provide a specified service to the other.",
        yesAnswer: "Service agreement template is available",
        noAnswer: "No services agreement contract template",
        category: "Legal Commercial Contracts Agreements",
        modules: "",
        topics: "Corporate Law",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Sub-contractor agreement: An agreement between a contractor and another party that is going to provide services/products to the contractor.",
        yesAnswer: "Sub-contractor contract template is available",
        noAnswer: "No sub-contractor contract template",
        category: "Legal Commercial Contracts Agreements",
        modules: "",
        topics: "Corporate Law",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Joint venture/ teaming agree: This is an agreement that involves two or more parties combining resources to bid for a corporate or government contract.",
        yesAnswer: "Teaming agreement contract template is available",
        noAnswer: "No teaming agreement contract template",
        category: "Legal Commercial Contracts Agreements",
        modules: "",
        topics: "Corporate Law",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you have paying customers?",
        yesAnswer: "",
        noAnswer: "",
        category: "Traction",
        modules: "Marketing and Sales",
        topics: "Sales Funnel",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have letters of intent/interest?",
        yesAnswer: "",
        noAnswer: "",
        category: "Traction",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a Memorandum of Understanding in place?",
        yesAnswer: "",
        noAnswer: "",
        category: "Traction",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Does the company perform budgeting and forecasting?",
        yesAnswer: "Budgeting and forecasting are being done.",
        noAnswer: "No budgeting and forecasting done",
        category: "Financial Management",
        modules: "Financial Management",
        topics: "Budgeting & Forecasting",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company perform reconciliations?",
        yesAnswer: "Financial reconsiliations are being recorded",
        noAnswer: "No reconciliations done.",
        category: "Financial Management",
        modules: "Financial Management",
        topics: "Reconcilliations",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company implement cash flow management?",
        yesAnswer: "There's a cashflow management process in place.",
        noAnswer: "No cashflow management systems in place",
        category: "Financial Management",
        modules: "Financial Management",
        topics: "Cash flow Management",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company document the financials of the business?",
        yesAnswer: "Company financials are documented.",
        noAnswer: "Company financials not documented.",
        category: "Financial Management",
        modules: "Financial Management",
        topics: "P&L statement + Balance sheet",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company have a dedicated person responsible for financial management?",
        yesAnswer: "A dedicated person to manageme finances has been appointed.",
        noAnswer: "No dedicated person for financial management.",
        category: "Financial Management",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated Accountant/Bookkeeper?",
        yesAnswer: "",
        noAnswer: "",
        category: "Financial Management",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: "Accountant/bookkeeper"
      },



      {
        question: "Is there a special thing, attribute or characteristic that your competitors are not able to copy or obtain?",
        yesAnswer: "Unique selleing point has been determined.",
        noAnswer: "Uniques Selling Point has not been determined.",
        category: "Unique Selling Point",
        modules: "",
        topics: "Disruptive Technology, Disruptive Business Model, New market & GTM Strategy",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you have a defined growth strategy with targeted growth areas?",
        yesAnswer: "There is a growth strategy that has been drafted",
        noAnswer: "Growth strategy not determined.",
        category: "Growth Strategy",
        modules: "Strategic Planning",
        topics: "Scale Strategy",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Does the company invest sufficiently in product or service development?",
        yesAnswer: "Investment in product/service development is being done.",
        noAnswer: "Investment in product or service development not sufficient.",
        category: "Growth Strategy",
        modules: "Strategic Planning",
        topics: "Scale Strategy",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },



      {
        question: "Do you document all the business processes?",
        yesAnswer: "Business processes are documented",
        noAnswer: "Business processes are not documented",
        category: "Business Process Management",
        modules: "Business Process Management",
        topics: "Process Development & Documentation",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Business processes are regularly reviewed and updated?",
        yesAnswer: "Business processes are reviewed",
        noAnswer: "Business processes not reviewed regularly or updated.",
        category: "Business Process Management",
        modules: "Business Process Management",
        topics: "Process Development & Documentation, Process Auditing And Review",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a method to manage deviations from documented business processes?",
        yesAnswer: "Method to identify deviations in processes has been established.",
        noAnswer: "No method to manage deviations in business processes.",
        category: "Business Process Management",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Are all business processes communicated to all company personnel?",
        yesAnswer: "Business process are communicated within the organization",
        noAnswer: "Business processes not communicated throughout the company",
        category: "Business Process Management",
        modules: "Business Process Management",
        topics: "Communication & Tracking",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Do you have a designated employee appointed for this?",
        yesAnswer: "",
        noAnswer: "",
        category: "Business Process Management",
        modules: "",
        topics: "",
        type: "Business Structure",
        recommendedJobOrSkills: "Process Development Specialist"
      },



      {
        question: "Do you perform employee satisfaction surveys?",
        yesAnswer: "Employee satisfaction surveys are completed",
        noAnswer: "No employee satisfaction surveys",
        category: "Employee Satisfaction",
        modules: "Talent Management",
        topics: "Employee Satisfaction",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      },
      {
        question: "Can you rank the level of employee satisfaction?",
        yesAnswer: "Employee satisfaction surveys are completed",
        noAnswer: "No employee satisfaction surveys",
        category: "Employee Satisfaction",
        modules: "Talent Management",
        topics: "Employee Satisfaction",
        type: "Business Structure",
        recommendedJobOrSkills: ""
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('assessment_questions', null, {});
  }
};
