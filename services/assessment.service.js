const db = require("../models")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createAssessment = async (payload) => {
    try {
        const assessment = await db.assessment.findOne({ where: { title: payload.title } })

        if (assessment) {
            return {
                error: true,
                message: 'Assessment title already been used.'
            }
        }
        
        const newAssessment = await db.assessment.create(payload)

        if (!newAssessment) {
            return {
                error: true,
                message: 'Assessment registration failed.'
            }
        }

        return {
            error: false,
            data: newAssessment
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
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
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getAssessment = async (id) => {
    try {

        const assessment = await db.assessment.findOne({ where: { id } })

        if (!assessment) {
            return {
                error: true,
                message: 'Assessment not found.'
            }
        }

        return {
            error: false,
            data: assessment
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateAssessment = async (id, payload = {}) => {
    try {

        const assessment = await db.assessment.findOne({ where: { id } })

        if (!assessment) {
            return {
                error: true,
                message: 'Assessment not found.'
            }
        }

        const newCompany = await db.assessment.update(payload, { where: { id } })

        if (!newCompany) {
            return {
                error: true,
                message: 'Assessment update failed.'
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

exports.deleteAssessment = async (id) => {
    try {

        const assessment = await db.assessment.findOne({ where: { id } })

        if (!assessment) {
            return {
                error: true,
                message: 'Assessment not found.'
            }
        }

        await db.assessment.destroy({ where: { id } })

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