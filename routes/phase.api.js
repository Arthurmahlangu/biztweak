const express = require("express")
const phaseController = require("../controllers/phase.controller")
const router = express.Router()

// Add routes
router.get('/phases', phaseController.getPhases)

module.exports = router