const { body } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.registerValidator = [
    body("fullnames").exists().isString().withMessage("Valid Fullnames is required"),
    body("email").exists().isEmail().withMessage("Valid Email is required"),
    body("password").exists().isStrongPassword().withMessage("Password not strong"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.loginValidator = [
    body("email").exists().isEmail().withMessage("Valid Email is required"),
    body("password").exists().withMessage("Valid Password is required"),
]