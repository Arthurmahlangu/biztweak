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
        .exists().withMessage("Title is required")
        .notEmpty().withMessage('Title can not be empty'),
    body("description")
        .exists().withMessage("Description is required")
        .notEmpty().withMessage('Description can not be empty'),
    body("category")
        .exists().withMessage("Assessment category is required")
        .notEmpty().withMessage('Category can not be empty'),
    body("business_phase")
        .exists().withMessage("Business phase is required")
        .notEmpty().withMessage('Business phase can not be empty'),
    body("score")
        .exists().withMessage("Assessment minimum score is required")
        .notEmpty().withMessage('Score can not be empty')
        .isNumeric().withMessage("Score must be numerical value between 0 - 100")
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
        .exists().withMessage("Title is required")
        .notEmpty().withMessage('Title can not be empty'),
    body("description")
        .exists().withMessage("Description is required")
        .notEmpty().withMessage('Description can not be empty'),
    body("category")
        .exists().withMessage("Assessment category is required")
        .notEmpty().withMessage('Category can not be empty'),
    body("business_phase")
        .exists().withMessage("Business phase is required")
        .notEmpty().withMessage('Business phase can not be empty'),
    body("score")
        .exists().withMessage("Assessment minimum score is required")
        .notEmpty().withMessage('Score can not be empty')
        .isNumeric().withMessage("Score must be numerical value between 0 - 100")
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


/**
 *
 *name, description, type, audio
 * @type {ValidationChain[]}
 */
 exports.createCourseTextValidator = [
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
exports.updateCourseTextValidator = [
    param("cid")
        .exists().withMessage("Course ID is required")
        .isNumeric().withMessage("Course ID must be numeric"),
    param("vid")
        .exists().withMessage("Text ID is required")
        .isNumeric().withMessage("Text ID must be numeric"),
    body("name")
        .exists().withMessage("Name is required"),
    body("description")
        .exists().withMessage("Description is required"),
    body("type")
        .exists().withMessage("Type is required")
]