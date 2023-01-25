const express = require("express")
const eventController = require("../controllers/event.controller")
const router = express.Router()

// Add routes
router.post('/events', eventController.createEvent)
router.put('/events/:id', eventController.updateEvent)
router.delete('/events/:id', eventController.deleteEvent)
router.get('/events/:id', eventController.findEvent)
router.get('/events', eventController.getEvents)

module.exports = router