const express = require("express")
const router = express.Router()

// Add routes
const IncubatorController = require("../controllers/incubator.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const { indexValidator } = require("../middlewares/validators/incubator.validations")


router.post("/incubators", policyMiddleware, IncubatorController.createIncubator)
router.get("/incubators", policyMiddleware, IncubatorController.getIncubators)
router.get("/incubators/:id", policyMiddleware, IncubatorController.getIncubator)
router.put("/incubators/:id", policyMiddleware, IncubatorController.updateIncubator)
router.delete("/incubators/:id", policyMiddleware, IncubatorController.deleteIncubator)

module.exports = router