const db = require("../models")

const roleService = {}

roleService.createRole = async (name, policy) => {
    try {

        const roleFound = await db.role.findOne({ where: { name } })

        if (roleFound) {
            return {
                error: true,
                message: 'Role already exists.'
            }
        }

        const role = await db.role.create({ name, policy })

        if (!role) {
            return {
                error: true,
                message: 'Error creating role.'
            }
        }

        return {
            error: false,
            data: role
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

roleService.getRole = async (name) => {
    try {
        name = name || ''

        const role = await db.role.findOne({ where: { name } })

        if (!role) {
            return {
                error: true,
                message: 'Role not found.'
            }
        }

        return {
            error: false,
            data: role
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

roleService.getRoles = async () => {
    try {
        let allRoles = []

        const roles = await db.role.findAll({ raw : true })

        if (roles) {
            roles.forEach((role) => {
                allRoles.push(role)
            })
        }

        return {
            error: false,
            data: allRoles
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

roleService.updateRole = async (name, columns) => {
    try {
        name = name || ''

        const role = await db.role.update(columns, { where: { name } })

        if (!role) {
            return {
                error: true,
                message: 'Role not found.'
            }
        }

        return {
            error: false
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

roleService.deleteRole = async (name) => {
    try {
        name = name || ''

        const user = await db.role.destroy({ where: { name } })

        if (!user) {
            return {
                error: true,
                message: 'Role not found.'
            }
        }

        return {
            error: false
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

module.exports = roleService