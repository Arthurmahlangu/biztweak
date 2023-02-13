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

    if (assessment) {
        if (assessment.report) {
            assessment.report = JSON.parse(assessment.report)
        }
        if (assessment.recommendedModules) {
            assessment.recommendedModules = JSON.parse(assessment.recommendedModules)
        }
        if (assessment.questionsAndAnswers) {
            assessment.questionsAndAnswers = JSON.parse(assessment.questionsAndAnswers)
        }
    }

    return {
        data: assessment
    }
}

exports.getAssessments = async () => {
    const assessments = await db.assessment.findAll({
        attributes: assessmentResource
    })

    const categories = await db.assessment_question.findAll({ 
        attributes: ['category'],
        group: ['category'] 
    })

    const overview = {}

    categories.forEach((category) => {
        overview[category.category] = 0
    })

    assessments.forEach((assessment) => {
        if (assessment) {
            if (assessment.report) {
                assessment.report = JSON.parse(assessment.report)
                for (const key in assessment.report.percentages) {
                    const objectKeys = Object.keys(overview)

                    if (objectKeys.includes(key)) {
                        overview[key] += assessment.report.percentages[key] / assessments.length
                    }
                }
            }
            if (assessment.recommendedModules) {
                assessment.recommendedModules = JSON.parse(assessment.recommendedModules)
            }
            if (assessment.questionsAndAnswers) {
                assessment.questionsAndAnswers = JSON.parse(assessment.questionsAndAnswers)
            }
        }
    })

    assessments.overview = overview

    return {
        data: assessments
    }
}