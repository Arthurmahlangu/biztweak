const { successResponse, failResponse } = require("../helpers/methods")
const assessmentService = require("../services/assessment.service")

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
exports.createAssessment = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id

        const { data } = await assessmentService.createAssessment(payload)
    
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
exports.updateAssessment = async (req, res) => {
    try {
    
        const { data } = await assessmentService.updateAssessment(req.params.id, req.body)
    
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
exports.deleteAssessment = async (req, res) => {
    try {
    
        const { data } = await assessmentService.deleteAssessment(req.params.id)
    
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
exports.getAssessments = async (req, res) => {
    try {
    
        const { data } = await assessmentService.getAssessments()
    
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
exports.findAssessment = async (req, res) => {
    try {
    
        const { data } = await assessmentService.findAssessment(req.params.id)
    
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
exports.getAssessmentQuestions = async (req, res) => {
    try {
    
        const { data } = await assessmentService.getAssessmentQuestionsByPhase(req.params.companyPhaseId)
    
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