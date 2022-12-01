const express = require("express")
const router = express.Router()

const profileController = require("../controllers/profile.controller")

router.get('/profiles', profileController.getProfiles)
router.get('/profiles/:id', profileController.getProfile)
router.put('/profiles/:id', profileController.updateProfile)
router.delete('/profiles/:id', profileController.deleteProfile)

module.exports = router