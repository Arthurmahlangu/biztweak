const express = require("express")
const router = express.Router()

// Add routes
const IncubatorController = require("../controllers/incubator.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { 
    getIncubatorValidator, 
    createIncubatorValidator, 
    updateIncubatorValidator
} = require("../middlewares/validators/incubator.validations")


router.post("/incubators", validate(createIncubatorValidator), AuthMiddleware, IncubatorController.createIncubator)
router.get("/incubators", AuthMiddleware, IncubatorController.getIncubators)
router.get("/incubators/:id", validate(getIncubatorValidator), AuthMiddleware, IncubatorController.getIncubator)
router.put("/incubators/:id", validate(updateIncubatorValidator), AuthMiddleware, IncubatorController.updateIncubator)
router.delete("/incubators/:id", validate(getIncubatorValidator), AuthMiddleware, IncubatorController.deleteIncubator)

module.exports = router