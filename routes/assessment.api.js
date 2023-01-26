const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const assessmentController = require("../controllers/assessment.controller")
const router = express.Router()


// Add routes
router.post('/assessments', AuthMiddleware, assessmentController.createAssessment)
router.put('/assessments/:id', AuthMiddleware, assessmentController.updateAssessment)
router.delete('/assessments/:id', AuthMiddleware, assessmentController.updateAssessment)
router.get('/assessments/:id', AuthMiddleware, assessmentController.findAssessment)
router.get('/assessments', AuthMiddleware, assessmentController.getAssessments)

// Questions
router.get('/assessments/questions/:companyPhaseId', AuthMiddleware, assessmentController.getAssessmentQuestions)

module.exports = router