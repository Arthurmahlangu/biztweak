const express = require("express")
const authController = require("../controllers/auth.controller")
const router = express.Router()

// Add routes
router.post('/email-auth', authController.emailLogin)
router.post('/email-register', authController.emailRegister)

module.exports = router