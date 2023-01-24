const express = require("express")
const router = express.Router()

const userApi = require("./user.api")
const companyApi = require("./company.api")
const assessmentApi = require("./assessment.api")

router.use("/api/v1", userApi)
router.use("/api/v1", companyApi)
router.use("/api/v1", assessmentApi)

module.exports = router
