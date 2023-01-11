const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.getUserValidator = [
    param("id")
        .exists().withMessage("User ID is required")
        .notEmpty().withMessage("User ID can not be empty")
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
        .notEmpty().withMessage("Role can not be empty")
        .isUppercase().withMessage("Role name must be all caps")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.createAccountValidator = [
    body("fullname")
        .exists().withMessage("Fullname is required")
        .notEmpty().withMessage("Fullname can not be empty"),
    body("email")
        .exists().isEmail().withMessage("Invalid Email")
        .notEmpty().withMessage("Email can not be empty"),
    body("password")
        .exists().isStrongPassword().withMessage("Password not meeting minimum requirements")
        .notEmpty().withMessage("Password can not be empty")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.deleteUserValidator = [
    param("id")
        .exists().withMessage("User ID is required")
        .notEmpty().withMessage("User ID can not be empty")
        .isNumeric().withMessage("User ID must be numeric")
]