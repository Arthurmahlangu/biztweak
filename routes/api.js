const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")
const UserApi = require("./user.api")
const AuthApi = require("./auth.api")
const CompanyApi = require("./company.api")
const CourseApi = require("./course.api")
const AssessmentApi = require("./assessment.api")
const IncubatorApi = require("./incubator.api")
const TokenApi = require("./token.api")
const RuleApi = require("./rule.api")


router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)


router.use("/api/v1", UserApi)
router.use("/api/v1", AuthApi)
router.use("/api/v1", CompanyApi)
router.use("/api/v1", CourseApi)
router.use("/api/v1", AssessmentApi)
router.use("/api/v1", IncubatorApi)
router.use("/api/v1", TokenApi)
router.use("/api/v1", RuleApi)

module.exports = router
