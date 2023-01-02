const express = require("express")
const router = express.Router()

// Add routes
const AttendanceController = require("../controllers/attendance.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
// const { validate } = require("../middlewares/validators/wrapper.validator")
// const {
//     indexValidator
// } = require("../middlewares/validators/attendance.validations")


router.post("/attendances", AuthMiddleware, AttendanceController.createAttendance)
router.get("/attendances", AuthMiddleware, AttendanceController.getAttendances)
router.get("/attendances/:id", AuthMiddleware, AttendanceController.getAttendance)
router.put("/attendances/:id", AuthMiddleware, AttendanceController.updateAttendance)
router.delete("/attendances/:id", AuthMiddleware, AttendanceController.deleteAttendance)

module.exports = router