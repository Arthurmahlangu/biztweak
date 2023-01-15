const { body } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.authValidator = [
    body("fullname")
        .exists().withMessage("Fullname is required"),
    body("email")
        .exists().withMessage("Invalid Email")
        .isEmail().withMessage("Invalid Email"),
    body("password")
        .exists().withMessage("Password required")
        .isStrongPassword().withMessage("Password not meeting minimum requirements")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.loginValidator = [
    body("email")
        .exists().withMessage("Invalid Email")
        .isEmail().withMessage("Invalid Email"),
    body("password")
        .exists().withMessage("Password required")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.forgotpasswordValidator = [
    body("email")
        .exists().withMessage("Invalid Email")
        .isEmail().withMessage("Invalid Email")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.passwordValidator = [
    param("id").exists().isInt().withMessage("Invalid ID"),
    body("password").exists().isStrongPassword().withMessage("Password not meeting minimum requirements")
]

