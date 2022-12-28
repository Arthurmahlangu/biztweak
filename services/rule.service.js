const db = require("../models")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createRule = async (payload) => {
    try {
        const rule = await db.rule.findOne({ 
            where: { 
                role: payload.role, 
                path: payload.path, 
                model: payload.model, 
                method: payload.method 
            } 
        })

        if (rule) {
            return {
                error: true,
                message: 'Rule already set.'
            }
        }
        
        const newRule = await db.rule.create(payload)

        if (!newRule) {
            return {
                error: true,
                message: 'Rule registration failed.'
            }
        }

        return {
            error: false,
            data: newRule
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getRules = async () => {
    try {
        
        const rules = await db.rule.findAll()

        return {
            error: false,
            data: rules
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getRule = async (id) => {
    try {

        const rule = await db.rule.findOne({ where: { id } })

        if (!rule) {
            return {
                error: true,
                message: 'Rule not found.'
            }
        }

        return {
            error: false,
            data: rule
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateRule = async (id, payload = {}) => {
    try {

        const rule = await db.rule.findOne({ where: { id } })

        if (!rule) {
            return {
                error: true,
                message: 'Rule not found.'
            }
        }

        const newRule = await db.rule.update(payload, { where: { id } })

        if (!newRule) {
            return {
                error: true,
                message: 'Rule update failed.'
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

exports.deleteRule = async (id) => {
    try {

        const rule = await db.rule.findOne({ where: { id } })

        if (!rule) {
            return {
                error: true,
                message: 'Rule not found.'
            }
        }

        await db.rule.destroy({ where: { id } })

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