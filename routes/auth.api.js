const express = require("express")
const router = express.Router()

const AuthController = require("../controllers/auth.controller")

const { validate } = require("../middlewares/validators/wrapper.validator")
const { authValidator } = require("../middlewares/validators/auth.validations")

router.post("/email-auth", AuthController.emailAuth)
router.post("/email-register", validate(authValidator), AuthController.emailRegister)

module.exports = router