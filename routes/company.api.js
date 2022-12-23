const express = require("express")
const router = express.Router()

// Add routes
const CompanyController = require("../controllers/company.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { companyValidator, companyAssessmentValidator } = require("../middlewares/validators/company.validations")


router.post("/companies", policyMiddleware, validate(companyValidator), CompanyController.createCompany)
router.get("/companies", policyMiddleware, CompanyController.getCompanies)
router.get("/companies/:id", policyMiddleware, CompanyController.getCompany)
router.put("/companies/:id", policyMiddleware, validate(companyValidator), CompanyController.updateCompany)
router.delete("/companies/:id", policyMiddleware, CompanyController.deleteCompany)
router.post("/companies/:id/assessments", policyMiddleware, validate(companyAssessmentValidator), CompanyController.createCompanyAssessments)
router.get("/companies/:cid/assessments/:aid", policyMiddleware, CompanyController.getCompanyAssessments)
router.put("/companies/:cid/assessments/:aid", policyMiddleware, CompanyController.updateCompanyAssessments)

module.exports = router