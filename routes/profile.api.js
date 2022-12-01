const express = require("express")
const router = express.Router()

const profileController = require("../controllers/profile.controller")

router.get('/profile', profileController.getProfiles)
router.get('/profile/:id', profileController.getProfile)
router.put('/profile/:id', profileController.updateProfiles)
router.delete('/profile/:id', profileController.deleteProfiles)

module.exports = router