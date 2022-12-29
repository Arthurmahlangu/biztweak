const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.getRuleValidator = [
    param("id")
        .exists().withMessage("Rule ID is required")
        .isNumeric().withMessage("Rule ID must be numeric")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.createRuleValidator = [
    body("role")
        .exists().withMessage("Role name is required")
        .isUppercase().withMessage("Role name must be all caps"),
    body("path")
        .exists().withMessage("Valid path is required"),
    body("model")
        .exists().withMessage("Valid model name is required"),
    body("method")
        .exists().withMessage("Valid HTTP method is required")
        .isUppercase().withMessage("HTTP Method must be all caps"),
    body("owner")
        .exists().withMessage("Owner is required")
        .isBoolean().withMessage("Owner value must be of type boolean"),
        body("group")
        .exists().withMessage("Group is required")
        .isBoolean().withMessage("Group value must be of type boolean"),
        body("other")
        .exists().withMessage("Other is required")
        .isBoolean().withMessage("Other value must be of type boolean"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateRuleValidator = [
    param("id")
        .exists().withMessage("Rule ID is required")
        .isNumeric().withMessage("Rule ID must be numeric"),
    body("role")
        .exists().withMessage("Role name is required")
        .isUppercase().withMessage("Role name must be all caps"),
    body("path")
        .exists().withMessage("Valid path is required"),
    body("model")
        .exists().withMessage("Valid model name is required"),
    body("method")
        .exists().withMessage("Valid HTTP method is required")
        .isUppercase().withMessage("HTTP Method must be all caps"),
    body("owner")
        .exists().withMessage("Owner is required")
        .isBoolean().withMessage("Owner value must be of type boolean"),
        body("group")
        .exists().withMessage("Group is required")
        .isBoolean().withMessage("Group value must be of type boolean"),
        body("other")
        .exists().withMessage("Other is required")
        .isBoolean().withMessage("Other value must be of type boolean"),
]