const express = require("express")
const inviteController = require("../controllers/invite.controller")
const router = express.Router()

// Add routes
router.post('/invites', inviteController.createInvite)
router.put('/invites/:id', inviteController.updateInvite)
router.delete('/invites/:id', inviteController.deleteInvite)
router.get('/invites/:id', inviteController.findInvite)
router.get('/invites', inviteController.getInvites)

module.exports = router