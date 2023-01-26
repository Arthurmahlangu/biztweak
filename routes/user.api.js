const express = require("express")
const router = express.Router()

const AuthMiddleware = require("../middlewares/auth.middleware")
const userController = require('../controllers/user.controller')

// Create
router.post('/users/create-root-user', AuthMiddleware, userController.createRootUser)
router.post('/users/create-admin-user', AuthMiddleware, userController.createRootUser)
router.post('/users/create-mentor-user', AuthMiddleware, userController.createRootUser)
router.post('/users/create-entrepreneur-user', AuthMiddleware, userController.createRootUser)

// Update
router.put('/users/profile/:id', AuthMiddleware, userController.updateUserProfile)
router.put('/users/email/:id', AuthMiddleware, userController.updateEmail)
router.put('/users/password/:id', AuthMiddleware, userController.updatePassword)

// Retrieve
router.get('/users/:id', AuthMiddleware, userController.findUser)
router.get('/users', AuthMiddleware, userController.getUsers)

// Delete
router.delete('/users/:id', AuthMiddleware, userController.deleteUserAccount)

module.exports = router