const db = require("../models")

exports.createToken = async (payload) => {
    try {
        const token = await db.token.findOne({ where: { token: "" } })

        if (token) {
            return {
                error: true,
                message: 'Token error.'
            }
        }
        
        const newToken = await db.token.create(payload)

        if (!newToken) {
            return {
                error: true,
                message: 'Token registration failed.'
            }
        }

        return {
            error: false,
            data: newToken
        }

    } catch (error) {
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
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.deleteRule = async (id) => {
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
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}