const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const assessmentController = require("../controllers/assessment.controller")
const router = express.Router()

const { validate } = require("../middlewares/validators/wrapper.validator")
const assessmentValidations = require("../middlewares/validators/assessment.validations")

// Add routes
router.post('/assessments', AuthMiddleware, validate(assessmentValidations.createAssessment), assessmentController.createAssessment)
router.put('/assessments/:id', AuthMiddleware, validate(assessmentValidations.updateAssessment), assessmentController.updateAssessment)
router.delete('/assessments/:id', AuthMiddleware, validate(assessmentValidations.deleteAssessment), assessmentController.deleteAssessment)
router.get('/assessments/:id', AuthMiddleware, validate(assessmentValidations.findAssessment), assessmentController.findAssessment)
router.get('/assessments', AuthMiddleware, assessmentController.getAssessments)

// Questions
router.get('/assessments/questions/:companyPhaseId', validate(assessmentValidations.getAssessmentQuestions), AuthMiddleware, assessmentController.getAssessmentQuestions)

module.exports = router