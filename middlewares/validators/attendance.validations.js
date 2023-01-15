const { body, param, } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.createAttendaceValidator = [
    body("category")
        .exists().withMessage("Invalid category")
        .notEmpty().withMessage("Category can not be empty"),
    body("type")
        .exists().withMessage("Invalid type")
        .notEmpty().withMessage("Type can not be empty"),
    body("date")
        .exists().withMessage("Invalid date")
        .notEmpty().withMessage("Date can not be empty"),
    body("attended")
        .exists().withMessage("Invalid attended value")
        .isBoolean().withMessage("Invalid attended value"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateAttendaceValidator = [
    param("id")
        .exists().withMessage("Invalid attendance ID")
        .notEmpty().withMessage("ID can not be empty")
        .isNumeric().withMessage("Invalid attendance ID"),
    body("category")
        .exists().withMessage("Invalid category")
        .notEmpty().withMessage("Category can not be empty"),
    body("type")
        .exists().withMessage("Invalid type")
        .notEmpty().withMessage("Type can not be empty"),
    body("date")
        .exists().withMessage("Invalid date")
        .notEmpty().withMessage("Date can not be empty"),
    body("attended")
        .exists().withMessage("Invalid attended value")
        .isBoolean().withMessage("Invalid attended value"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.getAttendaceValidator = [
    param("id")
        .exists().withMessage("Invalid attendance ID")
        .notEmpty().withMessage("ID can not be empty")
        .isNumeric().withMessage("Invalid attendance ID")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.deleteAttendaceValidator = [
    param("id")
        .exists().withMessage("Invalid attendance ID")
        .notEmpty().withMessage("ID can not be empty")
        .isNumeric().withMessage("Invalid attendance ID")
]

