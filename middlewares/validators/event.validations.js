const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.createEventValidator = [
    body("title")
        .exists().withMessage("Title is required")
        .notEmpty().withMessage('Title can not be empty'),
    body("description")
        .exists().withMessage("Description is required")
        .notEmpty().withMessage('Description can not be empty'),
    body("type")
        .exists().withMessage("Type is required")
        .notEmpty().withMessage('Type can not be empty'),
    body("start_date")
        .exists().withMessage("Start Date is required")
        .notEmpty().withMessage('Start Date can not be empty'),
    body("end_date")
        .exists().withMessage("End Date is required")
        .notEmpty().withMessage('End Date can not be empty'),
    body("frequency")
        .exists().withMessage("Frequency is required")
        .notEmpty().withMessage('Frequency type can not be empty'),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateEventValidator = [
    param("id")
        .exists().withMessage("Event ID is required")
        .notEmpty().withMessage('Title can not be empty'),
    body("title")
        .exists().withMessage("Title is required")
        .notEmpty().withMessage('Title can not be empty'),
    body("description")
        .exists().withMessage("Description is required")
        .notEmpty().withMessage('Description can not be empty'),
    body("type")
        .exists().withMessage("Type is required")
        .notEmpty().withMessage('Type can not be empty'),
    body("start_date")
        .exists().withMessage("Start Date is required")
        .notEmpty().withMessage('Start Date can not be empty'),
    body("end_date")
        .exists().withMessage("End Date is required")
        .notEmpty().withMessage('End Date can not be empty'),
    body("frequency")
        .exists().withMessage("Frequency is required")
        .notEmpty().withMessage('Frequency type can not be empty'),
]

/**
 *
 * @type {ValidationChain[]}
*/
exports.getEventValidator = [
    param("id")
        .exists().withMessage("Event ID is required")
        .notEmpty().withMessage('Title can not be empty'),
]

/**
 *
 * @type {ValidationChain[]}
*/
exports.createInviteValidator = [
    param("id")
        .exists().withMessage("Event ID is required")
        .notEmpty().withMessage('Title can not be empty'),
    body("email")
        .exists().withMessage("Email is required")
        .isEmail().withMessage("Email must be a valid email"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateInviteValidator = [
    param("eid")
        .exists().withMessage("Event ID is required")
        .notEmpty().withMessage("Event ID can not be empty")
        .isNumeric().withMessage("Event ID must be a number"),
    param("iid")
        .exists().withMessage("Invitation ID is required")
        .notEmpty().withMessage("Invitation ID can not be empty")
        .isNumeric().withMessage("Invitation ID must be a number"),
    body("attending")
        .exists().withMessage("Attending status is required")
        .notEmpty().withMessage("Attending status can not be empty"),
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.deleteInviteValidator = [
    param("eid")
        .exists().withMessage("Event ID is required")
        .notEmpty().withMessage("Event ID can not be empty")
        .isNumeric().withMessage("Event ID must be a number"),
    param("iid")
        .exists().withMessage("Invitation ID is required")
        .notEmpty().withMessage("Invitation ID can not be empty")
        .isNumeric().withMessage("Invitation ID must be a number"),
]
