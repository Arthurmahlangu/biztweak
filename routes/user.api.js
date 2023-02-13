const express = require("express")
const router = express.Router()

const AuthMiddleware = require("../middlewares/auth.middleware")
const userController = require('../controllers/user.controller')

// Create
router.post('/users/create-root-user', AuthMiddleware, userController.createRootUser)
router.post('/users/create-admin-user', AuthMiddleware, userController.createRootUser)
router.post('/users/create-mentor-user', AuthMiddleware, userController.createMentorUser)
router.post('/users/create-incubator-user', AuthMiddleware, userController.createIncubatorUser)
router.post('/users/create-entrepreneur-user', AuthMiddleware, userController.createRootUser)

// Update
router.put('/users/:id/profile', AuthMiddleware, userController.updateUserProfile)
router.put('/users/:id/email', AuthMiddleware, userController.updateEmail)
router.put('/users/:id/password', AuthMiddleware, userController.updatePassword)

// Retrieve
router.get('/users/:id', AuthMiddleware, userController.findUser)
router.get('/users', AuthMiddleware, userController.getUsers)

// Delete
router.delete('/users/:id', AuthMiddleware, userController.deleteUserAccount)

module.exports = router