const express = require("express")
const router = express.Router()

const roleController = require("../controllers/role.controller")

router.get('/roles', roleController.getRoles)
router.get('/roles/:name', roleController.getRole)
router.post('/roles', roleController.createRole)
router.put('/roles/:name', roleController.updateRole)
router.delete('/roles/:name', roleController.deleteRole)

module.exports = router