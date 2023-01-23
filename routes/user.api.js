const express = require("express")
const router = express.Router()

const userController = require('../controllers/user.controller')

// Create
router.post('/users/create-root-user', userController.createRootUser)
router.post('/users/create-admin-user', userController.createRootUser)
router.post('/users/create-mentor-user', userController.createRootUser)
router.post('/users/create-entrepreneur-user', userController.createRootUser)

// Update
router.put('/users/profile/:id', userController.updateUserProfile)
router.put('/users/email/:id', userController.updateEmail)
router.put('/users/password/:id', userController.updatePassword)

// Retrieve
router.get('/users/:id', userController.findUser)
router.get('/users', userController.getUsers)

// Delete
router.delete('/users/:id', userController.deleteUserAccount)

module.exports = router