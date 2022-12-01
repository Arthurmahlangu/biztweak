const { successResponse, failResponse } = require("../helpers/methods")
const roleService = require("../services/role.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createRole = async (req, res) => {
    const { name, policy } = req.body
    const role = await roleService.createRole(name, policy)
    
    if (!role.error) {
        res.send(
            successResponse(
                "Role created",
                role.data
            )
        )
    }

    res.send(
        failResponse(role.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getRole = async (req, res) => {
    const role = await roleService.getRole(req.params.name)
    
    if (!role.error) {
        res.send(
            successResponse(
                "Role found",
                role.data
            )
        )
    }

    res.send(
        failResponse(role.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getRoles = async (req, res) => {
    const roles = await roleService.getRoles()
    
    if (!roles.error) {
        res.send(
            successResponse(
                "Roles found",
                roles.data
            )
        )
    }

    res.send(
        failResponse(roles.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateRole = async (req, res) => {
    const role = await roleService.updateRole(req.params.name, req.body)
    
    if (!role.error) {
        res.send(
            successResponse("Role updated successfully", null)
        )
    }

    res.send(
        failResponse(role.message, null)
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteRole = async (req, res) => {
    const role = await roleService.deleteRole(req.params.name)
    
    if (!role.error) {
        res.send(
            successResponse("Role deleted successfully", null)
        )
    }

    res.send(
        failResponse(role.message, null)
    )
}