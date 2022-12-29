const express = require("express")
const router = express.Router()

// Add routes
const TokenController = require("../controllers/token.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const { indexValidator } = require("../middlewares/validators/incubator.validations")


router.post("/tokens", AuthMiddleware, TokenController.createToken)
router.get("/tokens", AuthMiddleware, TokenController.getTokens)
router.get("/tokens/:id", AuthMiddleware, TokenController.getToken)
router.put("/tokens/:id", AuthMiddleware, TokenController.updateToken)
router.delete("/tokens/:id", AuthMiddleware, TokenController.deleteToken)

module.exports = router