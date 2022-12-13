const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.passwordValidator = [
    param("id").exists().isInt().withMessage("Invalid ID"),
    body("password").exists().isStrongPassword().withMessage("Password not meeting minimum requirements")
]
