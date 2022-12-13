const express = require("express")
const router = express.Router()

// Add routes
const AssessmentController = require("../controllers/assessment.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/company.validations")


router.post("/assessments", policyMiddleware, AssessmentController.createAssessment)
router.get("/assessments", policyMiddleware, AssessmentController.getAssessments)
router.get("/assessments/:id", policyMiddleware, AssessmentController.getAssessment)
router.put("/assessments/:id", policyMiddleware, AssessmentController.updateAssessment)
router.delete("/assessments/:id", policyMiddleware, AssessmentController.deleteAssessment)

module.exports = router