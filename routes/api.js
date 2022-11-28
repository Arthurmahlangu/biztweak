const express = require("express")
const router = express.Router()

const IndexController = require("../controllers/index.controller")
const AuthController = require("../controllers/auth.controller")
const TokenController = require("../controllers/token.controller")
const ProfileController = require("../controllers/profile.controller")
const RoleController = require("../controllers/role.controller")

const { validate } = require("../middlewares/validators/wrapper.validator")
const { indexValidator } = require("../middlewares/validators/index.validations")

const apiversion = function(uri) {
    return `/v1${uri}`;
}


router.get("/", IndexController.index)
router.post("/", validate(indexValidator), IndexController.indexPost)


// Auth
router.post(apiversion('/user/login'), AuthController.login)
router.post(apiversion('/user/logout'), AuthController.logout)
router.post(apiversion('/user/register'), AuthController.register)

// Profile
router.get(apiversion('/profiles'), ProfileController.readAll)
router.get(apiversion('/profile/:userid'), ProfileController.readOne)
router.post(apiversion('/profile'), ProfileController.create)
router.put(apiversion('/profile/:userid'), ProfileController.refresh)
router.delete(apiversion('/profile/:userid'), ProfileController.delete)

// Token
router.get(apiversion('/token'), TokenController.create)
router.post(apiversion('/token'), TokenController.create)
router.put(apiversion('/token/:userid'), TokenController.refresh)
router.delete(apiversion('/token/:userid'), TokenController.delete)

// Role
router.get(apiversion('/roles'), RoleController.readAll)
router.get(apiversion('/role/:id'), RoleController.readOne)
router.post(apiversion('/role'), RoleController.create)
router.put(apiversion('/role'), RoleController.refresh)
router.delete(apiversion('/role'), RoleController.delete)




module.exports = router
