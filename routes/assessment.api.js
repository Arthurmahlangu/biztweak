const express = require("express")
const assessmentController = require("../controllers/assessment.controller")
const router = express.Router()


// Add routes
router.post('/assessments', assessmentController.createAssessment)
router.put('/assessments/:id', assessmentController.updateAssessment)
router.delete('/assessments/:id', assessmentController.updateAssessment)
router.get('/assessments/:id', assessmentController.findAssessment)
router.get('/assessments', assessmentController.getAssessments)

// Questions
router.get('/assessments/questions/:companyPhaseId', assessmentController.getAssessmentQuestions)

module.exports = router