const express = require("express")
const router = express.Router()

const userApi = require("./user.api")
const companyApi = require("./company.api")

router.use("/api/v1", userApi)
router.use("/api/v1", companyApi)

module.exports = router
