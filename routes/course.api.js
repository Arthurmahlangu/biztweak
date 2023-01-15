const express = require("express")
const router = express.Router()

const CourseController = require("../controllers/course.controller")

const AuthMiddleware = require("../middlewares/auth.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { 
    getCourseValidator, 
    updateCourseValidator, 
    createCourseValidator,
    createCourseAudioValidator,
    createCourseVideoValidator,
    createCourseTextValidator,
    createCourseTestValidator
} = require("../middlewares/validators/course.validations")


router.post("/courses", validate(createCourseValidator), AuthMiddleware, CourseController.createCourse)
router.get("/courses", AuthMiddleware, CourseController.getCourses)
router.get("/courses/my-courses", AuthMiddleware, CourseController.getMyCourses)
router.get("/courses/:id", validate(getCourseValidator), AuthMiddleware, CourseController.getCourse)
router.put("/courses/:id", validate(updateCourseValidator), AuthMiddleware, CourseController.updateCourse)
router.delete("/courses/:id", validate(getCourseValidator), AuthMiddleware, CourseController.deleteCourse)
router.post("/courses/:id/audio", validate(createCourseAudioValidator), AuthMiddleware, CourseController.createCourseAudio)
router.post("/courses/:id/video", validate(createCourseVideoValidator), AuthMiddleware, CourseController.createCourseVideo)
router.post("/courses/:id/text", validate(createCourseTextValidator), AuthMiddleware, CourseController.createCourseText)
router.post("/courses/:id/test", validate(createCourseTestValidator), AuthMiddleware, CourseController.createCourseTest)

module.exports = router