const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.createEventValidator = [
    body("title").exists().withMessage("Title is required"),
    body("description").exists().withMessage("Description is required"),
    body("type").exists().withMessage("Type is required"),
    body("startDate").exists().withMessage("Start Date is required"),
    body("endDate").exists().withMessage("End Date is required"),
    body("frequency").exists().withMessage("Frequency is required"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateEventValidator = [
    param("id").exists().withMessage("Event ID is required"),
    body("title").exists().withMessage("Title is required"),
    body("description").exists().withMessage("Description is required"),
    body("type").exists().withMessage("Type is required"),
    body("startDate").exists().withMessage("Start Date is required"),
    body("endDate").exists().withMessage("End Date is required"),
    body("frequency").exists().withMessage("Frequency is required"),
]

/**
 *
 * @type {ValidationChain[]}
*/
exports.getEventValidator = [
    param("id").exists().withMessage("Event ID is required"),
]

/**
 *
 * @type {ValidationChain[]}
*/
exports.createInviteValidator = [
    param("id").exists().withMessage("Event ID is required"),
    body("userid")
        .exists().withMessage("User ID is required")
        .isNumeric().withMessage("User ID must be a valid ID"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.deleteInviteValidator = [
    param("id").exists().withMessage("Event ID is required"),
]
