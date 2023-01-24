const express = require("express")
const companyController = require("../controllers/company.controller")
const router = express.Router()

// Add routes
router.post('/companies', companyController.createCompany)
router.put('/companies/:id', companyController.updateCompany)
router.delete('/companies/:id', companyController.deleteCompany)
router.get('/companies/:id', companyController.findCompany)
router.get('/companies', companyController.getCompanies)

module.exports = router