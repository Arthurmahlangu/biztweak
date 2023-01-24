const express = require("express")
const router = express.Router()

const userApi = require("./user.api")
const companyApi = require("./company.api")
const assessmentApi = require("./assessment.api")
const courseApi = require("./course.api")
const phaseApi = require("./phase.api")
const industryApi = require("./industry.api")

router.use("/api/v1", userApi)
router.use("/api/v1", companyApi)
router.use("/api/v1", assessmentApi)
router.use("/api/v1", courseApi)
router.use("/api/v1", phaseApi)
router.use("/api/v1", industryApi)

module.exports = router
