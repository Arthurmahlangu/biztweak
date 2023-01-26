const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const incubatorController = require("../controllers/incubator.controller")
const router = express.Router()

// Add routes
router.post('/incubators', AuthMiddleware, incubatorController.createIncubator)
router.put('/incubators/:id', AuthMiddleware, incubatorController.updateIncubator)
router.delete('/incubators/:id', AuthMiddleware, incubatorController.deleteIncubator)
router.get('/incubators/:id', AuthMiddleware, incubatorController.findIncubator)
router.get('/incubators', AuthMiddleware, incubatorController.getIncubators)

module.exports = router