const express = require("express")
const courseController = require("../controllers/course.controller")
const router = express.Router()

// Add routes
router.post('/courses', courseController.createCourse)
router.put('/courses/:id', courseController.updateCourse)
router.delete('/courses/:id', courseController.deleteCourse)
router.get('/courses/:id', courseController.findCourse)
router.get('/courses', courseController.getCourses)

// Add videos
router.post('/courses/video', courseController.createCourseVideo)
router.put('/courses/:id/video:videoId', courseController.updateCourseVideo)
router.delete('/courses/:id/video:videoId', courseController.deleteCourseVideo)
router.get('/courses/:id/video/:videoId', courseController.findCourseVideo)
router.get('/courses/:id/video', courseController.getCourseVideos)

// Add audio
router.post('/courses/audio', courseController.createCourseAudio)
router.put('/courses/:id/audio/:audioId', courseController.updateCourseAudio)
router.delete('/courses/:id/audio:audioId', courseController.deleteCourseAudio)
router.get('/courses/:id/audio:audioId', courseController.findCourseAudio)
router.get('/courses/audio', courseController.getCourseAudios)

// Add document
router.post('/courses/document', courseController.createCourseDocument)
router.put('/courses/:id/document:documentId', courseController.updateCourseDocument)
router.delete('/courses/:id/document:documentId', courseController.deleteCourseDocument)
router.get('/courses/:id/document:documentId', courseController.findCourseDocument)
router.get('/courses/document', courseController.getCourseDocuments)

// Add text
router.post('/courses/text', courseController.createCourseText)
router.put('/courses/:id/text/:textId', courseController.updateCourseText)
router.delete('/courses/:id/text/:textId', courseController.deleteCourseText)
router.get('/courses/:id/text/:textId', courseController.findCourseText)
router.get('/courses/text', courseController.getCourseTests)

// Add test
router.post('/courses/test', courseController.createCourseTest)
router.put('/courses/:id/test/:testId', courseController.updateCourseTest)
router.delete('/courses/:id/test/:testId', courseController.deleteCourseTest)
router.get('/courses/:id/test/:testId', courseController.findCourseTest)
router.get('/courses/test', courseController.getCourseTests)

// Add quiz
router.post('/courses/quiz', courseController.createCourseQuiz)
router.put('/courses/:id/quiz/:quizId', courseController.updateCourseQuiz)
router.delete('/courses/:id/quiz/:quizId', courseController.deleteCourseQuiz)
router.get('/courses/:id/quiz/:quizId', courseController.findCourseQuiz)
router.get('/courses/quiz', courseController.getCourseQuizzes)

module.exports = router