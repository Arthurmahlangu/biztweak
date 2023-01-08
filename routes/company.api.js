const express = require("express")
const router = express.Router()

// Add routes
const CompanyController = require("../controllers/company.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { companyValidator, companyAssessmentValidator } = require("../middlewares/validators/company.validations")


router.post("/companies", validate(companyValidator), AuthMiddleware, CompanyController.createCompany)
router.get("/companies", AuthMiddleware, CompanyController.getCompanies)
router.get("/companies/my-companies", AuthMiddleware, CompanyController.getMyCompanies)
router.get("/companies/:id", AuthMiddleware, CompanyController.getCompany)
router.put("/companies/:id", validate(companyValidator), AuthMiddleware, CompanyController.updateCompany)
router.delete("/companies/:id", AuthMiddleware, CompanyController.deleteCompany)
router.post("/companies/:id/assessments", validate(companyAssessmentValidator), AuthMiddleware, CompanyController.createCompanyAssessments)
router.get("/companies/:cid/assessments/:aid", AuthMiddleware, CompanyController.getCompanyAssessments)
router.put("/companies/:cid/assessments/:aid", AuthMiddleware, CompanyController.updateCompanyAssessments)

module.exports = router