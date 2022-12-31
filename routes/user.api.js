const express = require("express")
const router = express.Router()

const UserController = require("../controllers/user.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/password.validations")
const { emailValidator } = require("../middlewares/validators/email.validations")
const { 
    getUserValidator, 
    updateUserRoleValidator, 
    createAccountValidator 
} = require("../middlewares/validators/user.validations")

router.get("/users", AuthMiddleware, UserController.getUsers)
router.get("/users/:id", validate(getUserValidator), AuthMiddleware, UserController.getUser)
router.put("/users/:id", validate(getUserValidator), AuthMiddleware, UserController.updateProfile)
router.put("/users/role/:id", validate(updateUserRoleValidator), AuthMiddleware, UserController.updateRole)
router.put("/users/email/:id", validate(emailValidator), AuthMiddleware, UserController.updateEmail)
router.put("/users/password/:id", validate(passwordValidator), AuthMiddleware, UserController.updatePassword)
router.post("/users/super", validate(createAccountValidator), AuthMiddleware, UserController.createSuperAccount)
router.post("/users/admin", validate(createAccountValidator), AuthMiddleware, UserController.createAdminAccount)
router.post("/users/mentor", validate(createAccountValidator), AuthMiddleware, UserController.createMentorAccount)

module.exports = router