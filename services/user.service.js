const bcrypt = require("bcrypt")
const db = require("../models")
const { UserResource } = require("../resources/user.resource")
const { UserCollection } = require("../collections/user.collection")

exports.getUsers = async () => {
    try {
        
        const users = await db.user.findAll()

        return {
            error: false,
            data: UserCollection(users)
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getUser = async (id) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        return {
            error: false,
            data: UserResource(user)
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateUser = async (id, payload = {}) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        const newUser = await db.user.update(payload, { where: { id } })

        if (!newUser) {
            return {
                error: true,
                message: 'Error updating.'
            }
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updatePassword = async (id, password) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        const valid = await bcrypt.compare(password, user.password)

        if (valid) {
            return {
                error: true,
                message: 'Your old and new password look the same.'
            }
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = await db.user.update({ password: hashPassword }, { where: { id } })

        if (!newUser) {
            return {
                error: true,
                message: 'Error updating.'
            }
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.deleteUser = async (id) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        await db.user.destro({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}