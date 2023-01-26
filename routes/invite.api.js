const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const inviteController = require("../controllers/invite.controller")
const router = express.Router()

// Add routes
router.post('/invites', AuthMiddleware, inviteController.createInvite)
router.put('/invites/:id', AuthMiddleware, inviteController.updateInvite)
router.delete('/invites/:id', AuthMiddleware, inviteController.deleteInvite)
router.get('/invites/:id', AuthMiddleware, inviteController.findInvite)
router.get('/invites', AuthMiddleware, inviteController.getInvites)

module.exports = router