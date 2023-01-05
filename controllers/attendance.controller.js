const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createAttendance, 
    getAttendances, 
    getAttendance, 
    updateAttendance, 
    deleteAttendance 
} = require("../services/attendance.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createAttendance = async (req, res) => {

    const { category, type, date, attended } = req.body
    const service = await createAttendance({
        userid: req.auth.id, category, type, date, attended
    })

    if (service.error) {
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.getAttendances = async (req, res) => {

    const service = await getAttendances() 
    
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
exports.getAttendance = async (req, res) => {

    const service = await getAttendance(req.params.id)

    if (service.error) {
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.updateAttendance = async (req, res) => {

    const { category, type, date, attended } = req.body
    const service = await updateAttendance(req.params.id, {
        category, type, date, attended
    })

    if (service.error) {
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.deleteAttendance = async (req, res) => {

    const service = await deleteAttendance(req.params.id)

    if (service.error) {
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Deleted.", {
            data: []
        })
    )
}
