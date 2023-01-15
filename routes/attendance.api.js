const express = require("express")
const router = express.Router()

// Add routes
const AttendanceController = require("../controllers/attendance.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const {
    createAttendaceValidator,
    updateAttendaceValidator,
    getAttendaceValidator,
    deleteAttendaceValidator
} = require("../middlewares/validators/attendance.validations")


router.post("/attendances", validate(createAttendaceValidator), AuthMiddleware, AttendanceController.createAttendance)
router.get("/attendances", AuthMiddleware, AttendanceController.getAttendances)
router.get("/attendances/:id", validate(getAttendaceValidator), AuthMiddleware, AttendanceController.getAttendance)
router.put("/attendances/:id", validate(updateAttendaceValidator), AuthMiddleware, AttendanceController.updateAttendance)
router.delete("/attendances/:id", validate(deleteAttendaceValidator), AuthMiddleware, AttendanceController.deleteAttendance)

module.exports = router