const express = require("express")
const router = express.Router()

const CourseController = require("../controllers/course.controller")

const policyMiddleware = require("../middlewares/policy.middleware")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { passwordValidator } = require("../middlewares/validators/company.validations")


router.post("/courses", policyMiddleware, CourseController.createCourse)
router.get("/courses", policyMiddleware, CourseController.getCourses)
router.get("/courses/:id", policyMiddleware, CourseController.getCourse)
router.put("/courses/:id", policyMiddleware, CourseController.updateCourse)
router.delete("/courses/:id", policyMiddleware, CourseController.deleteCourse)
router.post("/courses/:id/audio", policyMiddleware, CourseController.createCourseAudio)

module.exports = router