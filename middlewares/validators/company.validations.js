const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.companyValidator = [
    body("name")
        .exists().withMessage("Invalid Name"),
    body("location")
        .exists().withMessage("Invalid Location"),
    body("phase")
        .exists().withMessage("Invalid Company Phase"),
    body("registered")
        .exists().withMessage("Invalid Company Registered value")
        .isBoolean().withMessage("Invalid Company Industry"),
    body("industry")
        .exists().withMessage("Invalid Company Industry"),
    body("employees")
        .exists().withMessage("Employers number do not exists")
        .isNumeric().withMessage("Invalid Number of Employers"),
    body("monthly_turnover")
        .exists().withMessage("Monthly turnover amount do not exists")
        .isNumeric().withMessage("Invalid monthly turnover amount"),
    body("annual_turnover")
        .exists().withMessage("Annual turnover amount do not exists")
        .isNumeric().withMessage("Invalid annual turnover amount")
]


/**
 *
 * @type {ValidationChain[]}
 */
exports.companyAssessmentValidator = [
    param("id")
        .exists().withMessage("Company ID do not exists")
        .isNumeric().withMessage("Invalid company ID"),

    body("answers").exists().withMessage("Invalid answer")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.ratingValidator = [
    body("rating").exists().withMessage("Invalid Rating value")
]
