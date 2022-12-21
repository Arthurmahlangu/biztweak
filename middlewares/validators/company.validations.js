const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.companyValidator = [
    body("name").exists().withMessage("Invalid Name"),
    body("location").exists().withMessage("Invalid Location"),
    body("phase").exists().withMessage("Invalid Company Phase"),
    body("registered").exists().withMessage("Invalid Company Registered value"),
    body("industry").exists().withMessage("Invalid Company Industry"),
    body("employers")
        .exists().withMessage("Employers number do not exists")
        .isNumeric().withMessage("Invalid Number of Employers"),
    body("turnover")
        .exists().withMessage("Turnover amount do not exists")
        .isNumeric().withMessage("Invalid Turnover amount")
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
