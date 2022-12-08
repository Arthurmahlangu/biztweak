const express = require("express")
const router = express.Router()

const profileController = require("../controllers/profile.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator, userIdValidator } = require("../middlewares/validators/profile.validations")

router.get('/profiles', profileController.getProfiles)
router.get('/profiles/:id', validate(userIdValidator), profileController.getProfile)
router.put('/profiles/:id', validate(userIdValidator), profileController.updateProfile)
router.delete('/profiles/:id', validate(userIdValidator), profileController.deleteProfile)
router.put('/password/:id', validate(passwordValidator), profileController.updatePassword)

module.exports = router