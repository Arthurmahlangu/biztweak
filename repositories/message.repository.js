const db = require("../models")
const messageResource = require("../resources/message.resource")
const userResource = require("../resources/user.resource")

exports.createMessage = async (payload) => {
    const message = await db.message.create(payload)

    if (!message) {
        throw new Error('Message creation failed.')
    }

    const { data } = await findNewMessage(message.id)

    return {
        data
    }
}

findNewMessage = async (id) => {
    const message = await db.message.findOne({
        where: { id },
        attributes: messageResource
    })

    if (!message) {
        throw new Error('Message not found.')
    }

    return {
        data: message
    }
}

exports.updateMessage = async (id, payload) => {
    const message = await db.message.update(payload, { where: { id } })

    if (!message) {
        throw new Error('Message update failed.')
    }

    return {
        data: null
    }
}

exports.deleteMessage = async (id) => {
    const message = await db.message.destroy({ where: { id } })

    if (!message) {
        throw new Error('Destroy message failed.')
    }

    return {
        data: null
    }
}

exports.findMessage = async (id) => {
    const message = await db.message.findOne({
        where: { id },
        attributes: messageResource,
        include: [
            {
                model: db.user,
                as: 'sender',
                attributes: userResource
            },
            {
                model: db.user,
                as: 'receiver',
                attributes: userResource
            },
        ]
    })

    if (!message) {
        throw new Error('Message not found.')
    }

    await this.updateMessage(id, { status: 1 })

    return {
        data: message
    }
}

exports.getMyMessages = async (toUserId) => {
    const message = await db.message.findAll({
        where: { toUserId },
        attributes: messageResource,
        include: [
            {
                model: db.user,
                as: 'sender',
                attributes: userResource
            },
            {
                model: db.user,
                as: 'receiver',
                attributes: userResource
            },
        ]
    })

    return {
        data: message
    }
}

exports.getMyNewMessages = async (toUserId) => {
    const message = await db.message.findAll({
        where: { toUserId, status: 0 },
        attributes: messageResource,
        include: [
            {
                model: db.user,
                as: 'sender',
                attributes: userResource
            },
            {
                model: db.user,
                as: 'receiver',
                attributes: userResource
            },
        ]
    })

    return {
        data: message
    }
}