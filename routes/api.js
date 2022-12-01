const express = require("express")
const router = express.Router()

const authApi = require("./auth.api")

const IndexController = require("../controllers/index.controller")
const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")

router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)

router.use("/api/v1", authApi)


module.exports = router
