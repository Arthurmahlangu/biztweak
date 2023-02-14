const express = require("express")
const router = express.Router()

const userApi = require("./user.api")
const companyApi = require("./company.api")
const assessmentApi = require("./assessment.api")
const courseApi = require("./course.api")
const phaseApi = require("./phase.api")
const industryApi = require("./industry.api")
const authApi = require("./auth.api")
const attendanceApi = require("./attendance.api")
const eventApi = require("./event.api")
const incubatorApi = require("./incubator.api")
const inviteApi = require("./invite.api")
const messageApi = require("./message.api")

router.get("/documentation", async (req, res) => {
    res.render("../public/documentation/index.html")
})

router.get("/", async (req, res) => {
    res.render("../public/index.html")
})

router.use("/api/v1", userApi)
router.use("/api/v1", companyApi)
router.use("/api/v1", assessmentApi)
router.use("/api/v1", courseApi)
router.use("/api/v1", phaseApi)
router.use("/api/v1", industryApi)
router.use("/api/v1", authApi)
router.use("/api/v1", attendanceApi)
router.use("/api/v1", eventApi)
router.use("/api/v1", incubatorApi)
router.use("/api/v1", inviteApi)
router.use("/api/v1", messageApi)

module.exports = router
