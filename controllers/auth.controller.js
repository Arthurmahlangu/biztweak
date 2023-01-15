const { successResponse, failResponse } = require("../helpers/methods")
const { emailAuth, emailRegister, forgotPassword, updateForgotPassword } = require("../services/auth.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.emailAuth = async (req, res) => {

    const { email, password } = req.body
    const service = await emailAuth(email, password)

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.emailRegister = async (req, res) => {

    const { fullname, email, password } = req.body
    const service = await emailRegister(fullname, email, password)

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.forgotPassword = async (req, res) => {

    const { email } = req.body
    const service = await forgotPassword(email)

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.updateForgotPassword = async (req, res) => {

    const { url, password } = req.body
    const service = await updateForgotPassword(url, password)

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Updated.", {
            data: service.data
        })
    )
}
