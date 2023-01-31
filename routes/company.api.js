const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const companyController = require("../controllers/company.controller")
const router = express.Router()

// Add routes
router.post('/companies', AuthMiddleware, companyController.createCompany)
router.put('/companies/:id', AuthMiddleware, companyController.updateCompany)
router.delete('/companies/:id', AuthMiddleware, companyController.deleteCompany)
router.get('/companies/my-companies', AuthMiddleware, companyController.getMyCompanies)
router.get('/companies/:id', AuthMiddleware, companyController.findCompany)
router.get('/companies', AuthMiddleware, companyController.getCompanies)

router.post('/companies/:id/assessments', AuthMiddleware, companyController.createCompanyAssessment)

module.exports = router