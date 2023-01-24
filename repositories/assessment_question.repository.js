const db = require("../models")
const assementQuestionResource = require("../resources/question.resource")

exports.createQuestion = async (payload) => {
    const question = await db.assessment_question.create(payload)

    if (!question) {
        throw new Error('Question creation failed.')
    }

    return {
        data: null
    }
}

exports.updateQuestion = async (id, payload) => {
    const question = await db.assessment_question.update(payload, { where: { id } })

    if (!question) {
        throw new Error('Question update failed.')
    }

    return {
        data: null
    }
}

exports.deleteQuestion = async (id) => {
    const question = await db.assessment_question.destroy({ where: { id } })

    if (!question) {
        throw new Error('Destroy question failed.')
    }

    return {
        data: null
    }
}

exports.findQuestion = async (id) => {
    const question = await db.assessment_question.findOne({
        where: { id },
        attributes: assementQuestionResource
    })

    if (!question) {
        throw new Error('Question not found.')
    }

    return {
        data: question
    }
}

exports.getQuestions = async () => {
    const question = await db.assessment_question.findAll({
        attributes: assementQuestionResource
    })

    return {
        data: question
    }
}

exports.getQuestionsByPhase = async (companyPhaseId) => {
    const question = await db.assessment_question.findAll({ where: { companyPhaseId } }, {
        attributes: assementQuestionResource
    })

    return {
        data: question
    }
}