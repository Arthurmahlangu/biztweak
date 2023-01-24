const express = require("express")
const industryController = require("../controllers/industry.controller")
const router = express.Router()

// Add routes
router.get('/industries', industryController.getIndustries)

module.exports = router