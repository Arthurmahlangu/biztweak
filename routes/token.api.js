const express = require("express")
const router = express.Router()

// Add routes
const TokenController = require("../controllers/token.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const { indexValidator } = require("../middlewares/validators/incubator.validations")


router.post("/tokens", policyMiddleware, TokenController.createToken)
router.get("/tokens", policyMiddleware, TokenController.getTokens)
router.get("/tokens/:id", policyMiddleware, TokenController.getToken)
router.put("/tokens/:id", policyMiddleware, TokenController.updateToken)
router.delete("/tokens/:id", policyMiddleware, TokenController.deleteToken)

module.exports = router