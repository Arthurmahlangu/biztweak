const express = require("express")
const router = express.Router()

// Add routes
const IncubatorController = require("../controllers/incubator.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const { indexValidator } = require("../middlewares/validators/incubator.validations")


router.post("/incubators", AuthMiddleware, IncubatorController.createIncubator)
router.get("/incubators", AuthMiddleware, IncubatorController.getIncubators)
router.get("/incubators/:id", AuthMiddleware, IncubatorController.getIncubator)
router.put("/incubators/:id", AuthMiddleware, IncubatorController.updateIncubator)
router.delete("/incubators/:id", AuthMiddleware, IncubatorController.deleteIncubator)

module.exports = router