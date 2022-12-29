const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.getIncubatorValidator = [
    param("id")
        .exists().withMessage("Incubator ID is required")
        .isNumeric().withMessage("Incubator ID must be numeric")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.createIncubatorValidator = [
    body("name")
        .exists().withMessage("Name is required"),
    body("industry")
        .exists().withMessage("Industry is required"),
    body("type")
        .exists().withMessage("Type is required"),
    body("sponsors")
        .exists().withMessage("Sponsers is required"),
    body("experience")
        .exists().withMessage("Experience is required"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateIncubatorValidator = [
    param("id")
        .exists().withMessage("Incubator ID is required")
        .isNumeric().withMessage("Incubator ID must be numeric"),
    body("name")
        .exists().withMessage("Name is required"),
    body("industry")
        .exists().withMessage("Industry is required"),
    body("type")
        .exists().withMessage("Type is required"),
    body("sponsors")
        .exists().withMessage("Sponsers is required"),
    body("experience")
        .exists().withMessage("Experience is required"),
]