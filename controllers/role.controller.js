const { successResponse } = require("../helpers/methods")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.readAll = async (req, res) => {
    res.send(
        successResponse("Create token", {
            data: "Login data..."
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.readOne = async (req, res) => {
    res.send(
        successResponse("Create token", {
            data: "Login data..."
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.create = async (req, res) => {
    res.send(
        successResponse("Create token", {
            data: "Login data..."
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
 exports.delete = async (req, res) => {
    res.send(
        successResponse("Delete token", {
            data: "Registration data..."
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
 exports.refresh = async (req, res) => {
    res.send(
        successResponse("Refresh token", {
            data: "Registration data..."
        })
    )
}
