const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createAssessment, 
    getAssessments, 
    getAssessment, 
    updateAssessment, 
    deleteAssessment,
} = require("../services/assessment.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createAssessment = async (req, res) => {

    const { category, label, answer } = req.body
    const service = await createAssessment({
        category, label, answer
    })

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getAssessments = async (req, res) => {

    const service = await getAssessments() 
    
    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getAssessment = async (req, res) => {

    const service = await getAssessment(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateAssessment = async (req, res) => {

    const { category, label, answer } = req.body
    const service = await updateAssessment(req.params.id, {
        category, label, answer
    })

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Updated.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteAssessment = async (req, res) => {

    const service = await deleteAssessment(req.params.id)

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: []
        })
    )
}
