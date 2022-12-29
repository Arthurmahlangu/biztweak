const express = require("express")
const router = express.Router()

// Add routes
const RuleController = require("../controllers/rule.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const { indexValidator } = require("../middlewares/validators/incubator.validations")


router.post("/rules", AuthMiddleware, RuleController.createRule)
router.get("/rules", AuthMiddleware, RuleController.getRules)
router.get("/rules/:id", AuthMiddleware, RuleController.getRule)
router.put("/rules/:id", AuthMiddleware, RuleController.updateRule)
router.delete("/rules/:id", AuthMiddleware, RuleController.deleteRule)

module.exports = router