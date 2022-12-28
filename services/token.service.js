const db = require("../models")
const jwt = require('jsonwebtoken');
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createToken = async (userid) => {
    try {
        const user = await db.user.findOne({ where: { id: userid } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        const token = await jwt.sign({
            id: user.id,
            email: user.email,
            fullname: user.fullname
        }, process.env.TOKEN_SECRET, {
            expiresIn: '7d'
        })

        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 7);

        const payload = {
            userid,
            type: "Access-Token",
            token,
            expiry
        }
        
        const newToken = await db.token.create(payload)

        if (!newToken) {
            return {
                error: true,
                message: 'Error generating a token.'
            }
        }

        return {
            error: false,
            data: newToken
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getTokens = async () => {
    try {
        
        const tokens = await db.token.findAll()

        return {
            error: false,
            data: tokens
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getToken = async (id) => {
    try {

        const token = await db.token.findOne({ where: { id } })

        if (!token) {
            return {
                error: true,
                message: 'Token not found.'
            }
        }

        return {
            error: false,
            data: token
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateToken = async (id, payload = {}) => {
    try {

        const token = await db.token.findOne({ where: { id } })

        if (!token) {
            return {
                error: true,
                message: 'Token not found.'
            }
        }

        const newToken = await db.token.update(payload, { where: { id } })

        if (!newToken) {
            return {
                error: true,
                message: 'Token update failed.'
            }
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.deleteToken = async (id) => {
    try {

        const token = await db.token.findOne({ where: { id } })

        if (!token) {
            return {
                error: true,
                message: 'Token not found.'
            }
        }

        await db.token.destroy({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}