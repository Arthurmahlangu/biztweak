const { successResponse, failResponse } = require("../helpers/methods")
const mailer = require("../helpers/mailer")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.index = async (req, res) => {
    res.render("../public/index.html")
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.documentation = async (req, res) => {
    res.render("../public/documentation/index.html")
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.emailPost = async (req, res) => {

    const { to, subject, body } = req.body
    const email = await mailer(to, subject, body)

    if (email.error) {
        return res.send(failResponse("Failed sending email"))
    }

    res.send(
        successResponse("Express JS API Server", {
            data: "here comes you payload...",
            request: req.body
        })
    )
}