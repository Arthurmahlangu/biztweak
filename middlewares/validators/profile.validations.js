const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.passwordValidator = [
    body("email").exists().isEmail().withMessage("Valid Email is required"),
    body("password").exists().isStrongPassword().withMessage("Password not strong"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.userIdValidator = [
    param("id").exists().withMessage("Valid user ID is required")
]