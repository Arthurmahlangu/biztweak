const db = require("../models")
const phaseResource = require("../resources/phase.resource")
const assementQuestionResource = require("../resources/question.resource")
const allAssementQuestionResource = require("../resources/all_question.resource")

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

exports.findQuestionWithPhaseInfo = async (id) => {
    const question = await db.assessment_question.findAll({
        where: { id },
        attributes: allAssementQuestionResource,
        include: [
            {
                model: db.phase,
                attributes: phaseResource
            }
        ]
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

exports.getQuestionsAllInfo = async () => {
    const question = await db.assessment_question.findAll({
        attributes: [
            'id', 
            'question',
            'yesAnswer',
            'noAnswer',
            'category',
            'module',
            'type',
            'phaseId'
        ]
    })

    return {
        data: question
    }
}

exports.getQuestionsByPhase = async (phaseId) => {
    const question = await db.assessment_question.findAll({ 
        where: { phaseId }, 
        attributes: assementQuestionResource 
    })

    return {
        data: question
    }
}

exports.getQuestionsByPhaseForSystem = async (phaseId) => {
    const question = await db.assessment_question.findAll({ 
        where: { phaseId }, 
        attributes: [
            'id', 
            'question',
            'yesAnswer',
            'noAnswer',
            'category',
            'modules',
            'topics',
            'type',
            'phaseId'
        ] 
    })

    return {
        data: question
    }
}