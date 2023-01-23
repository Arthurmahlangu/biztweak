const express = require("express")
const router = express.Router()

const userApi = require("./user.api")

router.use("/api/v1", userApi)

module.exports = router
