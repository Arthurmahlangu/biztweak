const express = require("express")
const router = express.Router()

const EventController = require("../controllers/event.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const {
    getEventValidator,
    updateEventValidator,
    createEventValidator,
    deleteInviteValidator,
    createInviteValidator,
    updateInviteValidator
} = require("../middlewares/validators/event.validations")


router.post("/events", validate(createEventValidator), AuthMiddleware, EventController.createEvent)
router.get("/events", AuthMiddleware, EventController.getEvents)
router.get("/events/:id", validate(getEventValidator), AuthMiddleware, EventController.getEvent)
router.put("/events/:id", validate(updateEventValidator), AuthMiddleware, EventController.updateEvent)
router.delete("/events/:id", validate(getEventValidator), AuthMiddleware, EventController.deleteEvent)
router.post("/events/:id/invite", validate(createInviteValidator), AuthMiddleware, EventController.createEventInvite)
router.put("/events/:eid/invite/:iid", validate(updateInviteValidator), AuthMiddleware, EventController.updateInvitation)
router.delete("/events/:eid/invite/:iid", validate(deleteInviteValidator), AuthMiddleware, EventController.deleteEventInvite)

module.exports = router
