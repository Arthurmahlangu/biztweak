const express = require("express")
const router = express.Router()

const CourseController = require("../controllers/course.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/company.validations")


router.post("/courses", AuthMiddleware, CourseController.createCourse)
router.get("/courses", AuthMiddleware, CourseController.getCourses)
router.get("/courses/:id", AuthMiddleware, CourseController.getCourse)
router.put("/courses/:id", AuthMiddleware, CourseController.updateCourse)
router.delete("/courses/:id", AuthMiddleware, CourseController.deleteCourse)
router.post("/courses/:id/audio", AuthMiddleware, CourseController.createCourseAudio)
router.post("/courses/:id/video", AuthMiddleware, CourseController.createCourseVideo)

module.exports = router