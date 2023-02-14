const express = require("express")
const router = express.Router()

const AuthMiddleware = require("../middlewares/auth.middleware")
const messageController = require("../controllers/message.controller")

// Add routes
router.post('/messages', AuthMiddleware, messageController.sendMessage)
router.delete('/messages/:id', AuthMiddleware, messageController.deleteMessage)
router.get('/messages', AuthMiddleware, messageController.getMessages)
router.get('/messages/new-messages', AuthMiddleware, messageController.getNewMessages)
router.get('/messages/:id', AuthMiddleware, messageController.findMessage)

module.exports = router