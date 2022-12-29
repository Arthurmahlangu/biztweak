const db = require("../models")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createAssessment = async (payload) => {
    try {
        const assessment = await db.assessment.findOne({ where: { title: payload.title } })

        if (assessment) {
            throw new Error('Assessment title already taken.')
        }
        
        const newAssessment = await db.assessment.create(payload)

        if (!newAssessment) {
            throw new Error('Assessment creation failed.')
        }

        return {
            error: false,
            data: newAssessment
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getAssessments = async () => {
    try {
        
        const assessments = await db.assessment.findAll()

        return {
            error: false,
            data: assessments
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getAssessment = async (id) => {
    try {

        const assessment = await db.assessment.findOne({ where: { id } })

        if (!assessment) {
            throw new Error('Assessment not found.')
        }

        return {
            error: false,
            data: assessment
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateAssessment = async (id, payload = {}) => {
    try {

        const assessment = await db.assessment.findOne({ where: { id } })

        if (!assessment) {
            throw new Error('Assessment not found.')
        }

        const newCompany = await db.assessment.update(payload, { where: { id } })

        if (!newCompany) {
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

exports.deleteAssessment = async (id) => {
    try {

        const assessment = await db.assessment.findOne({ where: { id } })

        if (!assessment) {
            throw new Error('Assessment not found.')
        }

        await db.assessment.destroy({ where: { id } })

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