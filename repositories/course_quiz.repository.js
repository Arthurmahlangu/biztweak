const db = require("../models")
const quizResource = require("../resources/quiz.resource")

exports.createCourseQuiz = async (payload) => {
    const course_quiz = await db.course_quiz.create(payload)

    if (!course_quiz) {
        throw new Error('Quiz creation failed.')
    }

    const { data } = await this.findCourseQuiz(course_quiz.id)

    return {
        data
    }
}

exports.updateCourseQuiz = async (id, payload) => {
    const course_quiz = await db.course_quiz.update(payload, { where: { id } })

    if (!course_quiz) {
        throw new Error('Quiz update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseQuiz = async (id) => {
    const course_quiz = await db.course_quiz.destroy({ where: { id } })

    if (!course_quiz) {
        throw new Error('Destroy quiz failed.')
    }

    return {
        data: null
    }
}

exports.findCourseQuiz = async (id) => {
    const course_quiz = await db.course_quiz.findOne({
        where: { id },
        attributes: quizResource
    })

    if (!course_quiz) {
        throw new Error('Quiz not found.')
    }

    return {
        data: course_quiz
    }
}

exports.getCourseQuizzes = async () => {
    const course_quiz = await db.course_quiz.findAll({
        attributes: quizResource
    })

    return {
        data: course_quiz
    }
}