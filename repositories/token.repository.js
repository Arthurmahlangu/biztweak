const db = require("../models")
const tokenResource = require("../resources/token.resource")

exports.createToken = async (payload) => {
    const token = await db.token.create(payload)

    if (!token) {
        throw new Error('Token creation failed.')
    }

    return {
        data: null
    }
}

exports.updateToken = async (id, payload) => {
    const token = await db.token.update(payload, { where: { id } })

    if (!token) {
        throw new Error('Token update failed.')
    }

    return {
        data: null
    }
}

exports.deleteToken = async (id) => {
    const token = await db.token.destroy({ where: { id } })

    if (!token) {
        throw new Error('Destroy token failed.')
    }

    return {
        data: null
    }
}

exports.findToken = async (id) => {
    const token = await db.token.findOne({
        where: { id },
        attributes: tokenResource
    })

    if (!token) {
        throw new Error('Token not found.')
    }

    return {
        data: token
    }
}

exports.getTokens = async () => {
    const token = await db.token.findAll({
        attributes: tokenResource
    })

    return {
        data: token
    }
}