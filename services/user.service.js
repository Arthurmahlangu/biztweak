const bcrypt = require("bcrypt")
const db = require("../models")
const { UserResource } = require("../resources/user.resource")
const { UserCollection } = require("../collections/user.collection")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.getUsers = async () => {
    try {
        
        const users = await db.user.findAll()

        return {
            error: false,
            data: UserCollection(users)
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getUser = async (id) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            throw new Error('User not found.')
        }

        return {
            error: false,
            data: UserResource(user)
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateUser = async (id, payload = {}) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            throw new Error('User not found.')
        }

        const newUser = await db.user.update(payload, { where: { id } })

        if (!newUser) {
            throw new Error('Update failed.')
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updatePassword = async (id, password) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            throw new Error('User not found.')
        }

        const valid = await bcrypt.compare(password, user.password)

        if (valid) {
            throw new Error('New password cannot be the same as old password.')
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const newUser = await db.user.update({ password: hashPassword }, { where: { id } })

        if (!newUser) {
            throw new Error('Update failed.')
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.deleteUser = async (id) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            throw new Error('User not found.')
        }

        await db.user.destro({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}