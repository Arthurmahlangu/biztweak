const { successResponse, failResponse } = require("../helpers/methods")
const { emailAuth, emailRegister } = require("../services/auth.service")

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
exports.emailRegister = async (req, res) => {

    const { fullname, email, password } = req.body
    const service = await emailRegister(fullname, email, password)

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
