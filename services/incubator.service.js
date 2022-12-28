const db = require("../models")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createIncubator = async (payload) => {
    try {
        const incubator = await db.incubator.findOne({ where: { name: payload.name } })

        if (incubator) {
            return {
                error: true,
                message: 'Incubator name already been taken.'
            }
        }
        
        const newIncubator = await db.incubator.create(payload)

        if (!newIncubator) {
            return {
                error: true,
                message: 'Incubator registration failed.'
            }
        }

        return {
            error: false,
            data: newIncubator
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getIncubators = async () => {
    try {
        
        const incubators = await db.incubator.findAll()

        return {
            error: false,
            data: incubators
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getIncubator = async (id) => {
    try {

        const incubator = await db.incubator.findOne({ where: { id } })

        if (!incubator) {
            return {
                error: true,
                message: 'Incubator not found.'
            }
        }

        return {
            error: false,
            data: incubator
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateIncubator = async (id, payload = {}) => {
    try {

        const incubator = await db.incubator.findOne({ where: { id } })

        if (!incubator) {
            return {
                error: true,
                message: 'Incubator not found.'
            }
        }

        const newIncubator = await db.incubator.update(payload, { where: { id } })

        if (!newIncubator) {
            return {
                error: true,
                message: 'Incubator update failed.'
            }
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.deleteIncubator = async (id) => {
    try {

        const incubator = await db.incubator.findOne({ where: { id } })

        if (!incubator) {
            return {
                error: true,
                message: 'Incubator not found.'
            }
        }

        await db.incubator.destroy({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}