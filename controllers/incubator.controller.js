const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createIncubator, 
    getIncubators, 
    getIncubator, 
    updateIncubator, 
    deleteIncubator 
} = require("../services/incubator.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createIncubator = async (req, res) => {

    const { name, industry, location, type, sponsors, experience } = req.body
    const service = await createIncubator({
        userid: req.auth.id, name, industry, location, type, sponsors, experience
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Incubator created", {
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
exports.getIncubators = async (req, res) => {

    const service = await getIncubators() 
    
    res.send(
        successResponse("Incubators.", {
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
exports.getIncubator = async (req, res) => {

    const service = await getIncubator(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Incubator", {
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
exports.updateIncubator = async (req, res) => {

    const { name, industry, location, type, sponsors, experience } = req.body
    const service = await updateIncubator(req.params.id, {
        name, industry, location, type, sponsors, experience
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Updated", {
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
exports.deleteIncubator = async (req, res) => {

    const service = await deleteIncubator(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Delete incubator", {
            data: []
        })
    )
}
