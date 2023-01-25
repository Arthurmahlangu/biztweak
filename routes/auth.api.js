const express = require("express")
const authController = require("../controllers/auth.controller")
const router = express.Router()

// Add routes
router.post('/email-auth', authController.emailLogin)
router.post('/email-register', authController.emailRegister)
router.post('/forgot-password', authController.requestForgotPassword)
router.put('/forgot-password', authController.updateForgotPassword)

module.exports = router