const express = require("express")
const router = express.Router()
const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");

const authApi = require("./auth.api")
const IndexController = require("../controllers/index.controller")

passport.use(authMiddleware)

router.use("/api/v1", authApi)
router.get("/", passport.authenticate('jwt', { session: false }), IndexController.index)

module.exports = router
