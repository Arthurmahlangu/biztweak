const express = require("express")
const router = express.Router()

// Add routes
const CompanyController = require("../controllers/company.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/company.validations")


router.post("/companies", policyMiddleware, CompanyController.createCompany)
router.get("/companies", policyMiddleware, CompanyController.getCompanies)
router.get("/companies/:id", policyMiddleware, CompanyController.getCompany)
router.put("/companies/:id", policyMiddleware, CompanyController.updateCompany)
router.delete("/companies/:id", policyMiddleware, CompanyController.deleteCompany)

module.exports = router