const db = require("../models")
const UserResource = require("../resources/user.resource")
const IncubatorResource = require("../resources/incubator.resource")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createIncubator = async (payload) => {
    try {
        const incubator = await db.incubator.findOne({ where: { name: payload.name } })

        if (incubator) {
            throw new Error('Incubator name already in use.')
        }
        
        const newIncubator = await db.incubator.create(payload)

        if (!newIncubator) {
            throw new Error('Incubator not created.')
        }

        return {
            error: false,
            data: newIncubator
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getIncubators = async () => {
    try {
        
        const incubators = await db.incubator.findAll({ 
            attributes: IncubatorResource,
            include: [
                {
                    model: db.user,
                    attributes: UserResource
                }
            ]
        })

        return {
            error: false,
            data: incubators
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getIncubator = async (id) => {
    try {

        const incubator = await db.incubator.findOne({ 
            where: { id },
            attributes: IncubatorResource,
            include: [
                {
                    model: db.user,
                    attributes: UserResource
                }
            ]
        })

        if (!incubator) {
            throw new Error('Incubator not found.')
        }

        return {
            error: false,
            data: incubator
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateIncubator = async (id, payload = {}) => {
    try {

        const incubator = await db.incubator.findOne({ where: { id } })

        if (!incubator) {
            throw new Error('Incubator not found.')
        }

        const newIncubator = await db.incubator.update(payload, { where: { id } })

        if (!newIncubator) {
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

exports.deleteIncubator = async (id) => {
    try {

        const incubator = await db.incubator.findOne({ where: { id } })

        if (!incubator) {
            throw new Error('Incubator not found.')
        }

        await db.incubator.destroy({ where: { id } })

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