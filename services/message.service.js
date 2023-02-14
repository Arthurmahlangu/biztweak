const messageRepository = require("../repositories/message.repository")

exports.sendMessage = async (toUserId, fromUser, body) => {

    const message = await messageRepository.createMessage({
        toUserId, fromUser, body, status: 0
    })

    return message
}

exports.deleteMessage = async (id) => {

    const message = await messageRepository.deleteMessage(id)

    return message
}

exports.findMessage = async (id) => {

    const message = await messageRepository.findMessage(id)

    return message
}

exports.getMessages = async (toUserId) => {

    const message = await messageRepository.getMyMessages(toUserId)

    return message
}

exports.getNewMessages = async (toUserId) => {

    const message = await messageRepository.getMyNewMessages(toUserId)

    return message
}