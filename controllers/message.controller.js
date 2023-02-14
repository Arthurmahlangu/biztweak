const { successResponse, failResponse } = require("../helpers/methods")
const messageService = require("../services/message.service")
const userRepository = require("../repositories/user.repository")

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
exports.sendMessage = async (req, res) => {
    try {
    
        const { email, message } = req.body

        const user = await userRepository.findUserByEmail(email)

        const { data } = await messageService.sendMessage(user.data.id, req.auth.id, message)
    
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
exports.deleteMessage = async (req, res) => {
    try {
    
        const { data } = await messageService.deleteMessage(req.params.id)
    
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
exports.findMessage = async (req, res) => {
    try {
    
        const { data } = await messageService.findMessage(req.params.id)
    
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
exports.getMessages = async (req, res) => {
    try {
    
        const { data } = await messageService.getMessages(req.auth.id)
    
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
exports.getNewMessages = async (req, res) => {
    try {
    
        const { data } = await messageService.getNewMessages(req.auth.id)
    
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
