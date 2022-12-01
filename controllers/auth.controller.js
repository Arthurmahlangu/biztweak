const { successResponse, failResponse } = require("../helpers/methods")
const userResource = require("../resources/user.resource")
const authService = require("../services/auth.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.authEmail = async (req, res) => {
    const { email, password } = req.body
    const user = await authService.emailAuth(email, password)

    if (!user.error) {
        res.send(
            successResponse(
                "Authenticated", 
                userResource(user.data)
            )
        )
    }

    res.send(
        failResponse(user.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.register = async (req, res) => {
    const { fullnames, email, password } = req.body
    const user = await authService.register(fullnames, email, password)

    if (!user.error) {
        res.send(
            successResponse(
                "Registration successful", 
                userResource(user.data)
            )
        )
    }

    res.send(
        failResponse(user.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.adminRegister = async (req, res) => {
    const { fullnames, email, password } = req.body
    const user = await authService.adminRegister(fullnames, email, password)

    if (!user.error) {
        res.send(
            successResponse(
                "Registration successful", 
                userResource(user.data)
            )
        )
    }

    res.send(
        failResponse(user.message, null)
    )
}
