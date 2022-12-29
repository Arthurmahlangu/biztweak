const express = require("express")
const router = express.Router()

// Add routes
const RuleController = require("../controllers/rule.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const {
    getRuleValidator, 
    updateRuleValidator, 
    createRuleValidator 
} = require("../middlewares/validators/rule.validations")


router.post("/rules", validate(createRuleValidator), AuthMiddleware, RuleController.createRule)
router.get("/rules", AuthMiddleware, RuleController.getRules)
router.get("/rules/:id", validate(getRuleValidator), AuthMiddleware, RuleController.getRule)
router.put("/rules/:id", validate(updateRuleValidator), AuthMiddleware, RuleController.updateRule)
router.delete("/rules/:id", validate(getRuleValidator), AuthMiddleware, RuleController.deleteRule)

module.exports = router