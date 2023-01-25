const db = require("../models")
const inviteResource = require("../resources/invite.resource")

exports.createInvite = async (payload) => {
    const invite = await db.invite.create(payload)

    if (!invite) {
        throw new Error('Invite creation failed.')
    }

    return {
        data: null
    }
}

exports.updateInvite = async (id, payload) => {
    const invite = await db.invite.update(payload, { where: { id } })

    if (!invite) {
        throw new Error('Invite update failed.')
    }

    return {
        data: null
    }
}

exports.deleteInvite = async (id) => {
    const invite = await db.invite.destroy({ where: { id } })

    if (!invite) {
        throw new Error('Destroy invite failed.')
    }

    return {
        data: null
    }
}

exports.findInvite = async (id) => {
    const invite = await db.invite.findOne({
        where: { id },
        attributes: inviteResource
    })

    if (!invite) {
        throw new Error('Invite not found.')
    }

    return {
        data: invite
    }
}

exports.getInvites = async () => {
    const invite = await db.invite.findAll({
        attributes: inviteResource
    })

    return {
        data: invite
    }
}