const { successResponse, failResponse } = require("../helpers/methods")
const courseService = require("../services/course.service")

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourse = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id

        const { data } = await courseService.createCourse(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourse = async (req, res) => {
    try {
    
        const { data } = await courseService.updateCourse(req.params.id, req.body, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourse = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourse(req.params.id)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourses = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourses()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourse = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourse(req.params.id)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

// Video

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseVideo = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id
        payload.courseId = req.params.id

        const { data } = await courseService.createCourseVideo(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourseVideo = async (req, res) => {
    try {

        const payload = req.body

        payload.courseId = req.params.id

        const { data } = await courseService.updateCourseVideo(req.params.videoId, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourseVideo = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourseVideo(req.params.videoId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourseVideos = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourseVideos()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourseVideo = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourseVideo(req.params.videoId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

// Audio

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseAudio = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id
        payload.courseId = req.params.id

        const { data } = await courseService.createCourseAudio(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourseAudio = async (req, res) => {
    try {

        const payload = req.body

        payload.courseId = req.params.id
    
        const { data } = await courseService.updateCourseAudio(req.params.audioId, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourseAudio = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourseAudio(req.params.audioId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourseAudios = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourseAudios()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourseAudio = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourseAudio(req.params.audioId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

// Document

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseDocument = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id
        payload.courseId = req.params.id

        const { data } = await courseService.createCourseDocument(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourseDocument = async (req, res) => {
    try {

        const payload = req.body

        payload.courseId = req.params.id
    
        const { data } = await courseService.updateCourseDocument(req.params.documentId, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourseDocument = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourseDocument(req.params.documentId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourseDocuments = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourseDocuments()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourseDocument = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourseDocument(req.params.documentId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

// Text

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseText = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id
        payload.courseId = req.params.id

        const { data } = await courseService.createCourseText(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourseText = async (req, res) => {
    try {

        const payload = req.body

        payload.courseId = req.params.id
    
        const { data } = await courseService.updateCourseText(req.params.textId, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourseText = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourseText(req.params.textId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourseTexts = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourseTexts()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourseText = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourseText(req.params.textId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

// Test

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseTest = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id
        payload.courseId = req.params.id

        const { data } = await courseService.createCourseTest(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourseTest = async (req, res) => {
    try {

        const payload = req.body

        payload.courseId = req.params.id
    
        const { data } = await courseService.updateCourseTest(req.params.testId, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourseTest = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourseTest(req.params.testId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourseTests = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourseTests()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourseTest = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourseTest(req.params.testId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

// Quiz

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseQuiz = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id
        payload.courseId = req.params.id

        const { data } = await courseService.createCourseQuiz(payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourseQuiz = async (req, res) => {
    try {

        const payload = req.body

        payload.courseId = req.params.id
    
        const { data } = await courseService.updateCourseQuiz(req.params.quizId, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourseQuiz = async (req, res) => {
    try {
    
        const { data } = await courseService.deleteCourseQuiz(req.params.quizId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourseQuizzes = async (req, res) => {
    try {
    
        const { data } = await courseService.getCourseQuizzes()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findCourseQuiz = async (req, res) => {
    try {
    
        const { data } = await courseService.findCourseQuiz(req.params.quizId)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}