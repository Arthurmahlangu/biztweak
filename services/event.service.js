const eventRepository = require("../repositories/event.repository")

exports.createEvent = async (payload) => {
    const {
        userId,
        title,
        description,
        type,
        startDate,
        endDate,
        frequency
    } = payload

    const event = await eventRepository.createEvent({
        userId,
        title,
        description,
        type,
        startDate,
        endDate,
        frequency
    })

    return event
}

exports.updateEvent = async (id, payload) => {
    const {
        title,
        description,
        type,
        startDate,
        endDate,
        frequency
    } = payload

    const event = await eventRepository.updateEvent(id, {
        title,
        description,
        type,
        startDate,
        endDate,
        frequency
    })

    return event
}


exports.deleteEvent = async (id) => {
    const event = await eventRepository.deleteEvent(id)

    return event
}

exports.getEvents = async () => {
    const event = await eventRepository.getEvents()

    return event
}

exports.findEvent = async (id) => {
    const event = await eventRepository.findEvent(id)

    return event
}