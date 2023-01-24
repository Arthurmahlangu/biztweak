const db = require("../models")
const quizResource = require("../resources/quiz.resource")

exports.createCourseQuiz = async (payload) => {
    const quiz = await db.quiz.create(payload)

    if (!quiz) {
        throw new Error('Quiz creation failed.')
    }

    return {
        data: null
    }
}

exports.updateCourseQuiz = async (id, payload) => {
    const quiz = await db.quiz.update(payload, { where: { id } })

    if (!quiz) {
        throw new Error('Quiz update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseQuiz = async (id) => {
    const quiz = await db.quiz.destroy({ where: { id } })

    if (!quiz) {
        throw new Error('Destroy quiz failed.')
    }

    return {
        data: null
    }
}

exports.findCourseQuiz = async (id) => {
    const quiz = await db.quiz.findOne({
        where: { id },
        attributes: quizResource
    })

    if (!quiz) {
        throw new Error('Quiz not found.')
    }

    return {
        data: quiz
    }
}

exports.getCourseQuizzes = async () => {
    const quiz = await db.quiz.findAll({
        attributes: quizResource
    })

    return {
        data: quiz
    }
}