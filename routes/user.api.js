const express = require("express")
const router = express.Router()

const UserController = require("../controllers/user.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/password.validations")
const { emailValidator } = require("../middlewares/validators/email.validations")

router.get("/users", policyMiddleware, UserController.getUsers)
router.get("/users/:id", policyMiddleware, UserController.getUser)
router.put("/users/:id", policyMiddleware, UserController.updateProfile)
router.put("/users/role/:id", policyMiddleware, UserController.updateRole)
router.put("/users/email/:id", validate(emailValidator), policyMiddleware, UserController.updateEmail)
router.put("/users/password/:id", validate(passwordValidator), policyMiddleware, UserController.updatePassword)

module.exports = router