const express = require("express")
const AuthMiddleware = require("../middlewares/auth.middleware")
const courseController = require("../controllers/course.controller")
const router = express.Router()

// Add routes
router.post('/courses', AuthMiddleware, courseController.createCourse)
router.put('/courses/:id', AuthMiddleware, courseController.updateCourse)
router.delete('/courses/:id', AuthMiddleware, courseController.deleteCourse)
router.get('/courses/:id', AuthMiddleware, courseController.findCourse)
router.get('/courses', AuthMiddleware, courseController.getCourses)

// Add videos
router.post('/courses/video', AuthMiddleware, courseController.createCourseVideo)
router.put('/courses/:id/video:videoId', AuthMiddleware, courseController.updateCourseVideo)
router.delete('/courses/:id/video:videoId', AuthMiddleware, courseController.deleteCourseVideo)
router.get('/courses/:id/video/:videoId', AuthMiddleware, courseController.findCourseVideo)
router.get('/courses/:id/video', AuthMiddleware, courseController.getCourseVideos)

// Add audio
router.post('/courses/audio', AuthMiddleware, courseController.createCourseAudio)
router.put('/courses/:id/audio/:audioId', AuthMiddleware, courseController.updateCourseAudio)
router.delete('/courses/:id/audio:audioId', AuthMiddleware, courseController.deleteCourseAudio)
router.get('/courses/:id/audio:audioId', AuthMiddleware, courseController.findCourseAudio)
router.get('/courses/audio', AuthMiddleware, courseController.getCourseAudios)

// Add document
router.post('/courses/document', AuthMiddleware, courseController.createCourseDocument)
router.put('/courses/:id/document:documentId', AuthMiddleware, courseController.updateCourseDocument)
router.delete('/courses/:id/document:documentId', AuthMiddleware, courseController.deleteCourseDocument)
router.get('/courses/:id/document:documentId', AuthMiddleware, courseController.findCourseDocument)
router.get('/courses/document', AuthMiddleware, courseController.getCourseDocuments)

// Add text
router.post('/courses/text', AuthMiddleware, courseController.createCourseText)
router.put('/courses/:id/text/:textId', AuthMiddleware, courseController.updateCourseText)
router.delete('/courses/:id/text/:textId', AuthMiddleware, courseController.deleteCourseText)
router.get('/courses/:id/text/:textId', AuthMiddleware, courseController.findCourseText)
router.get('/courses/text', AuthMiddleware, courseController.getCourseTests)

// Add test
router.post('/courses/test', AuthMiddleware, courseController.createCourseTest)
router.put('/courses/:id/test/:testId', AuthMiddleware, courseController.updateCourseTest)
router.delete('/courses/:id/test/:testId', AuthMiddleware, courseController.deleteCourseTest)
router.get('/courses/:id/test/:testId', AuthMiddleware, courseController.findCourseTest)
router.get('/courses/test', AuthMiddleware, courseController.getCourseTests)

// Add quiz
router.post('/courses/quiz', AuthMiddleware, courseController.createCourseQuiz)
router.put('/courses/:id/quiz/:quizId', AuthMiddleware, courseController.updateCourseQuiz)
router.delete('/courses/:id/quiz/:quizId', AuthMiddleware, courseController.deleteCourseQuiz)
router.get('/courses/:id/quiz/:quizId', AuthMiddleware, courseController.findCourseQuiz)
router.get('/courses/quiz', AuthMiddleware, courseController.getCourseQuizzes)

module.exports = router