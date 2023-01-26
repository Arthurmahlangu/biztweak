const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const attendanceController = require("../controllers/attendance.controller")
const router = express.Router()

// Add routes
router.post('/attendances', AuthMiddleware, attendanceController.createAttendance)
router.put('/attendances/:id', AuthMiddleware, attendanceController.updateAttendance)
router.delete('/attendances/:id', AuthMiddleware, attendanceController.deleteAttendance)
router.get('/attendances/:id', AuthMiddleware, attendanceController.findAttendance)
router.get('/attendances', AuthMiddleware, attendanceController.getAttendances)

module.exports = router