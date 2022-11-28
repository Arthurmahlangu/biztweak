const { successResponse } = require("../helpers/methods")
const db = require("../models")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.login = async (req, res) => {
    res.send(
        successResponse("Login", {
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
exports.logout = async (req, res) => {
    res.send(
        successResponse("Express JS API Boiler Plate post api working like a charm...", {
            data: "here comes you payload...",
            request: req.body
        })
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

    const user = await db.users.create({
        fullnames, email, role: 'entrepreneur', password 
    });

    console.log(user);

    res.send(
        successResponse("Register", {
            data: "Registration data..."
        })
    )
}
