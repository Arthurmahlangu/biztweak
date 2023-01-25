const { successResponse, failResponse } = require("../helpers/methods")
const authService = require("../services/auth.service")

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
exports.emailLogin = async (req, res) => {
    try {
    
        const { email, password } = req.body

        const { data } = await authService.emailLogin(email, password)
    
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
exports.emailRegister = async (req, res) => {
    try {
    
        const { 
            fullNames, 
            email, 
            password 
        } = req.body

        const { data } = await authService.emailRegister(fullNames, email, password, 'ENTREPRENEUR')
    
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
exports.requestForgotPassword = async (req, res) => {
    try {

        const { data } = await authService.requestForgotPassword(req.body.email)
    
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
exports.updateForgotPassword = async (req, res) => {
    try {
    
        const { 
            url, 
            email, 
        } = req.body

        const { data } = await authService.updateForgotPassword(url, email)
    
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