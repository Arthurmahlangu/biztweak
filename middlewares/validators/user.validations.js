const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.getUserValidator = [
    param("id")
        .exists().withMessage("User ID is required")
        .isNumeric().withMessage("User ID must be numeric")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateUserRoleValidator = [
    param("id")
        .exists().withMessage("User ID is required")
        .isNumeric().withMessage("User ID must be numeric"),
    body("role")
        .exists().withMessage("Role name is required")
        .isUppercase().withMessage("Role name must be all caps")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.createAccountValidator = [
    body("fullname").exists().withMessage("Fullname is required"),
    body("email").exists().isEmail().withMessage("Invalid Email"),
    body("password").exists().isStrongPassword().withMessage("Password not meeting minimum requirements")
]