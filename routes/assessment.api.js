const express = require("express")
const router = express.Router()

// Add routes
const AssessmentController = require("../controllers/assessment.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/company.validations")


router.post("/assessments", AuthMiddleware, AssessmentController.createAssessment)
router.get("/assessments", AuthMiddleware, AssessmentController.getAssessments)
router.get("/assessments/:id", AuthMiddleware, AssessmentController.getAssessment)
router.put("/assessments/:id", AuthMiddleware, AssessmentController.updateAssessment)
router.delete("/assessments/:id", AuthMiddleware, AssessmentController.deleteAssessment)

module.exports = router