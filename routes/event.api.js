const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const eventController = require("../controllers/event.controller")
const router = express.Router()

// Add routes
router.post('/events', AuthMiddleware, eventController.createEvent)
router.put('/events/:id', AuthMiddleware, eventController.updateEvent)
router.delete('/events/:id', AuthMiddleware, eventController.deleteEvent)
router.get('/events/:id', AuthMiddleware, eventController.findEvent)
router.get('/events', AuthMiddleware, eventController.getEvents)

module.exports = router