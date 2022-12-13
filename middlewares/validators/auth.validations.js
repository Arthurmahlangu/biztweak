const { body } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.authValidator = [
    body("fullname").exists().withMessage("Fullname is required"),
    body("email").exists().isEmail().withMessage("Invalid Email"),
    body("password").exists().isStrongPassword().withMessage("Password not meeting minimum requirements")
]
