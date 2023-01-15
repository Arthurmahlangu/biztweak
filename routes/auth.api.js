const express = require("express")
const router = express.Router()

const AuthController = require("../controllers/auth.controller")

const { validate } = require("../middlewares/validators/wrapper.validator")
const { authValidator, loginValidator, forgotpasswordValidator, passwordValidator } = require("../middlewares/validators/auth.validations")

router.post("/email-auth", validate(loginValidator), AuthController.emailAuth)
router.post("/email-register", validate(authValidator), AuthController.emailRegister)
router.post("/forgot-password", validate(forgotpasswordValidator), AuthController.forgotPassword)
router.put("/forgot-password", validate(passwordValidator), AuthController.updateForgotPassword)

module.exports = router