const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createEvent, 
    getEvents, 
    getEvent, 
    updateEvent, 
    deleteEvent, 
    deleteEventInvite,
    createEventInvite
} = require("../services/event.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createEvent = async (req, res) => {

    const { title, description, type, startDate, endDate, frequency } = req.body
    const service = await createEvent({
        userid: req.auth.id, title, description, type, startDate, endDate, frequency
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
exports.getEvents = async (req, res) => {

    const service = await getEvents() 
    
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
exports.getEvent = async (req, res) => {

    const service = await getEvent(req.params.id)

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
exports.updateEvent = async (req, res) => {

    const { title, description, type, startDate, endDate, frequency } = req.body
    const service = await updateEvent(req.params.id, {
        title, description, type, startDate, endDate, frequency
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
exports.deleteEvent = async (req, res) => {

    const service = await deleteEvent(req.params.id)

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Deleted.", {
            data: []
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createEventInvite = async (req, res) => {

    const { userid } = req.body
    const service = await createEventInvite(req.params.id, {
        userid
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
exports.deleteEventInvite = async (req, res) => {

    const service = await deleteEventInvite(req.params.id)

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Deleted.", {
            data: []
        })
    )
}
