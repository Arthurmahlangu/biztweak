const db = require("../models")
const eventResource = require("../resources/event.resource")

exports.createEvent = async (payload) => {
    const event = await db.event.create(payload)

    if (!event) {
        throw new Error('Event creation failed.')
    }

    return {
        data: await this.findEvent(event.id)
    }
}

exports.updateEvent = async (id, payload) => {
    const event = await db.event.update(payload, { where: { id } })

    if (!event) {
        throw new Error('Event update failed.')
    }

    return {
        data: null
    }
}

exports.deleteEvent = async (id) => {
    const event = await db.event.destroy({ where: { id } })

    if (!event) {
        throw new Error('Destroy event failed.')
    }

    return {
        data: null
    }
}

exports.findEvent = async (id) => {
    const event = await db.event.findOne({
        where: { id },
        attributes: eventResource
    })

    if (!event) {
        throw new Error('Event not found.')
    }

    return {
        data: event
    }
}

exports.getEvents = async () => {
    const event = await db.event.findAll({
        attributes: eventResource
    })

    return {
        data: event
    }
}