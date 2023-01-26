const { successResponse, failResponse } = require("../helpers/methods")
const incubatorService = require("../services/incubator.service")

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
exports.createIncubator = async (req, res) => {
    try {
    
        const payload = req.body

        payload.userId = req.auth.id

        const { data } = await incubatorService.createIncubator(payload)
    
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
exports.updateIncubator = async (req, res) => {
    try {
    
        const { data } = await incubatorService.updateIncubator(req.params.id, req.body)
    
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
exports.deleteIncubator = async (req, res) => {
    try {
    
        const { data } = await incubatorService.deleteIncubator(req.params.id)
    
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
exports.getIncubators = async (req, res) => {
    try {
    
        const { data } = await incubatorService.getIncubators()
    
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
exports.findIncubator = async (req, res) => {
    try {
    
        const { data } = await incubatorService.findIncubator(req.params.id)
    
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