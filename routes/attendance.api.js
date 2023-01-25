const express = require("express")
const attendanceController = require("../controllers/attendance.controller")
const router = express.Router()

// Add routes
router.post('/attendances', attendanceController.createAttendance)
router.put('/attendances/:id', attendanceController.updateAttendance)
router.delete('/attendances/:id', attendanceController.deleteAttendance)
router.get('/attendances/:id', attendanceController.findAttendance)
router.get('/attendances', attendanceController.getAttendances)

module.exports = router