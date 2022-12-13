const express = require("express")
const router = express.Router()

// Add routes
const RuleController = require("../controllers/rule.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const { indexValidator } = require("../middlewares/validators/incubator.validations")


router.post("/rules", policyMiddleware, RuleController.createRule)
router.get("/rules", policyMiddleware, RuleController.getRules)
router.get("/rules/:id", policyMiddleware, RuleController.getRule)
router.put("/rules/:id", policyMiddleware, RuleController.updateRule)
router.delete("/rules/:id", policyMiddleware, RuleController.deleteRule)

module.exports = router