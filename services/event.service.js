const db = require("../models")
const UserResource = require("../resources/user.resource")
const EventResource = require("../resources/event.resource")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createEvent = async (payload) => {
    try {
        const event = await db.event.findOne({ where: { title: payload.title } })

        if (event) {
            throw new Error('Event title already in use.')
        }
        
        const newEvent = await db.event.create(payload)

        if (!newEvent) {
            throw new Error('Event not created.')
        }

        const newInvite = await db.invite.create({
            userid: payload.userid,
            eventid: newCalendarEvent.id
        })

        if (!newInvite) {
            throw new Error('Event not attached to the creator.')
        }

        return {
            error: false,
            data: newEvent
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getEvents = async () => {
    try {
        
        const events = await db.event.findAll({ 
            attributes: EventResource,
            include: [
                {
                    model: db.user,
                    attributes: UserResource
                },
            ]
        })

        return {
            error: false,
            data: events
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getEvent = async (id) => {
    try {

        const event = await db.event.findOne({ 
            where: { id },
            attributes: EventResource,
            include: [
                {
                    model: db.user,
                    attributes: UserResource
                }
            ]
        })

        if (!event) {
            throw new Error('Event not found.')
        }

        return {
            error: false,
            data: event
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateEvent = async (id, payload = {}) => {
    try {

        const event = await db.event.findOne({ where: { id } })

        if (!event) {
            throw new Error('Event not found.')
        }

        const newEvent = await db.event.update(payload, { where: { id } })

        if (!newEvent) {
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

exports.deleteEvent = async (id) => {
    try {

        const event = await db.event.findOne({ where: { id } })

        if (!event) {
            throw new Error('Event not found.')
        }

        await db.event.destroy({ where: { id } })

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

exports.createEventInvite = async (id, payload = {}) => {
    try {
        const event = await db.event.findOne({ where: { id } })

        if (!event) {
            throw new Error('Event not found.')
        }

        const newInvite = await db.invite.create({
            userid: payload.userid,
            eventid: newCalendarEvent.id
        })

        if (!newInvite) {
            throw new Error('Event invite failed.')
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

exports.deleteEventInvite = async (id) => {
    try {

        const event = await db.invite.findOne({ where: { id } })

        if (!event) {
            throw new Error('Invite not found.')
        }

        await db.event.destroy({ where: { id } })

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