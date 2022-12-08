const express = require("express")
const router = express.Router()

const authController = require("../controllers/auth.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { registerValidator, loginValidator } = require("../middlewares/validators/auth.validations")

router.post('/user/logout', authController.logout)
router.post('/user/register', validate(registerValidator), authController.register)
router.post('/user/register-admin', validate(registerValidator), authController.adminRegister)
router.post('/user/auth-email', validate(loginValidator), authController.authEmail)

module.exports = router