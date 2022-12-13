const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.emailValidator = [
    param("id").exists().isInt().withMessage("Invalid ID"),
    body("email").exists().isEmail().withMessage("Invalid Email")
]
