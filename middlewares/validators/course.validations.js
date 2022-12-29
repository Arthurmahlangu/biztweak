const { body, param } = require("express-validator")

/**
 *
 * @type {ValidationChain[]}
 */
exports.getCourseValidator = [
    param("id")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.createCourseValidator = [
    body("title")
        .exists().withMessage("Title is required"),
    body("description")
        .exists().withMessage("Description is required")
]

/**
 *
 * @type {ValidationChain[]}
 */
exports.updateCourseValidator = [
    param("id")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric"),
    body("title")
        .exists().withMessage("Title is required"),
    body("description")
        .exists().withMessage("Description is required")
]

/**
 *
 *name, description, type, audio
 * @type {ValidationChain[]}
 */
exports.createCourseAudioValidator = [
    param("id")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric"),
    body("name")
        .exists().withMessage("Name is required"),
    body("description")
        .exists().withMessage("Description is required"),
    body("type")
        .exists().withMessage("Type is required")
]

/**
 *
 *name, description, type, audio
 * @type {ValidationChain[]}
 */
exports.updateCourseAudioValidator = [
    param("cid")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric"),
    param("aid")
        .exists().withMessage("Audio ID is required")
        .isNumeric().withMessage("Audio ID must be numeric"),
    body("name")
        .exists().withMessage("Name is required"),
    body("description")
        .exists().withMessage("Description is required"),
    body("type")
        .exists().withMessage("Type is required")
]

/**
 *
 *name, description, type, audio
 * @type {ValidationChain[]}
 */
exports.createCourseVideoValidator = [
    param("id")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric"),
    body("name")
        .exists().withMessage("Name is required"),
    body("description")
        .exists().withMessage("Description is required"),
    body("type")
        .exists().withMessage("Type is required")
]

/**
 *
 *name, description, type, audio
 * @type {ValidationChain[]}
 */
exports.updateCourseVideoValidator = [
    param("cid")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric"),
    param("vid")
        .exists().withMessage("Video ID is required")
        .isNumeric().withMessage("Video ID must be numeric"),
    body("name")
        .exists().withMessage("Name is required"),
    body("description")
        .exists().withMessage("Description is required"),
    body("type")
        .exists().withMessage("Type is required")
]