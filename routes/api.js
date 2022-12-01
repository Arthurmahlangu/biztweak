const express = require("express")
const router = express.Router()
const passport = require("passport");
const authMiddleware = require("../middlewares/auth.middleware");

const authApi = require("./auth.api")
const profileApi = require("./profile.api")
const IndexController = require("../controllers/index.controller")

passport.use(authMiddleware)

const jwtOptions = {
    session: false
}

// Defaults
router.get("/", passport.authenticate('jwt', jwtOptions), IndexController.index)
router.get("/api", passport.authenticate('jwt', jwtOptions), IndexController.index)
router.get("/api/v1", passport.authenticate('jwt', jwtOptions), IndexController.index)


// Routes middleware
router.use("/api/v1", authApi)
router.use("/api/v1", profileApi)



module.exports = router
