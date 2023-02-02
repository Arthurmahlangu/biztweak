const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.createAssessment = [
    body("companyId")
        .exists().withMessage('Field not found')
        .notEmpty().withMessage('Value is empty')
        .isNumeric().withMessage('Value not a number')
        .isInt().withMessage('Value not a whole number'),

    body("questionsAndAnswers")
        .exists().withMessage('Field not found')
        .isString().withMessage('Value not a string')
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateAssessment = [
    param("id")
        .exists().withMessage('Param not found')
        .notEmpty().withMessage('Value is empty')
        .isNumeric().withMessage('Value not a number')
        .isInt().withMessage('Value not a whole number'),
        
    body("companyId")
        .exists().withMessage('Field not found')
        .notEmpty().withMessage('Value is empty')
        .isNumeric().withMessage('Value not a number')
        .isInt().withMessage('Value not a whole number'),

    body("questionsAndAnswers")
        .exists().withMessage('Field not found')
        .isString().withMessage('Value not a string')
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.deleteAssessment = [
    param("id")
        .exists().withMessage('Param not found')
        .notEmpty().withMessage('Value is empty')
        .isNumeric().withMessage('Value not a number')
        .isInt().withMessage('Value not a whole number'),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.findAssessment = [
    param("id")
        .exists().withMessage('Param not found')
        .notEmpty().withMessage('Value is empty')
        .isNumeric().withMessage('Value not a number')
        .isInt().withMessage('Value not a whole number'),
]
