const db = require("../models")
const assessmentResource = require("../resources/assessment.resource")

exports.createAssessment = async (payload) => {
    const assessment = await db.assessment.create(payload)

    if (!assessment) {
        throw new Error('Assessment creation failed.')
    }

    return {
        data: null
    }
}

exports.updateAssessment = async (id, payload) => {
    const assessment = await db.assessment.update(payload, { where: { id } })

    if (!assessment) {
        throw new Error('Assessment update failed.')
    }

    return {
        data: null
    }
}

exports.deleteAssessment = async (id) => {
    const assessment = await db.assessment.destroy({ where: { id } })

    if (!assessment) {
        throw new Error('Destroy assessment failed.')
    }

    return {
        data: null
    }
}

exports.findAssessment = async (id) => {
    const assessment = await db.assessment.findOne({
        where: { id },
        attributes: assessmentResource
    })

    if (!assessment) {
        throw new Error('Assessment not found.')
    }

    return {
        data: assessment
    }
}

exports.getAssessments = async () => {
    const assessment = await db.assessment.findAll({
        attributes: assessmentResource
    })

    return {
        data: assessment
    }
}