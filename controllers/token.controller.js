const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createToken, 
    getTokens, 
    getToken, 
    updateToken, 
    deleteToken 
} = require("../services/token.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createToken = async (req, res) => {

    const service = await createToken({
        userid: req.auth.id
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Token created", {
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
exports.getTokens = async (req, res) => {

    const service = await getTokens() 
    
    res.send(
        successResponse("Tokens.", {
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
exports.getToken = async (req, res) => {

    const service = await getToken(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Token", {
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
exports.updateToken = async (req, res) => {

    const service = await updateToken(req.params.id)

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
exports.deleteToken = async (req, res) => {

    const service = await deleteToken(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Delete token", {
            data: []
        })
    )
}
