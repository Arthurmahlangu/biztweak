const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const UserApi = require("./user.api")
const AuthApi = require("./auth.api")
const CompanyApi = require("./company.api")
const CourseApi = require("./course.api")
const AssessmentApi = require("./assessment.api")
const IncubatorApi = require("./incubator.api")
const TokenApi = require("./token.api")
const RuleApi = require("./rule.api")
const AttendanceApi = require("./attendance.api")


router.get("/", IndexController.index)
router.get("/documentation", IndexController.documentation)

router.use("/api/v1", UserApi)
router.use("/api/v1", AuthApi)
router.use("/api/v1", CompanyApi)
router.use("/api/v1", CourseApi)
router.use("/api/v1", AssessmentApi)
router.use("/api/v1", IncubatorApi)
router.use("/api/v1", TokenApi)
router.use("/api/v1", RuleApi)
router.use("/api/v1", AttendanceApi)

module.exports = router
