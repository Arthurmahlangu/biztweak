const express = require("express")
const incubatorController = require("../controllers/incubator.controller")
const router = express.Router()

// Add routes
router.post('/incubators', incubatorController.createIncubator)
router.put('/incubators/:id', incubatorController.updateIncubator)
router.delete('/incubators/:id', incubatorController.deleteIncubator)
router.get('/incubators/:id', incubatorController.findIncubator)
router.get('/incubators', incubatorController.getIncubators)

module.exports = router