const inviteRepository = require("../repositories/invite.repository")

exports.createInvite = async (payload) => {
    const {
        userId,
        eventId,
        attending
    } = payload

    const invite = await inviteRepository.createInvite({
        userId,
        eventId,
        attending
    })

    return invite
}

exports.updateInvite = async (id, payload) => {
    const {
        eventId,
        attending
    } = payload

    const invite = await inviteRepository.updateInvite(id, {
        eventId,
        attending
    })

    return invite
}


exports.deleteInvite = async (id) => {
    const invite = await inviteRepository.deleteInvite(id)

    return invite
}

exports.getInvites = async () => {
    const invite = await inviteRepository.getInvites()

    return invite
}

exports.findInvite = async (id) => {
    const invite = await inviteRepository.findInvite(id)

    return invite
}