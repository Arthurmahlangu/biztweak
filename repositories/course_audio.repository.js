const db = require("../models")
const courseQuizResource = require("../resources/course_quiz.resource")

exports.createCourseQuiz = async (payload) => {
    const course_quiz = await db.course_quiz.create(payload)

    if (!course_quiz) {
        throw new Error('Course text creation failed.')
    }

    return {
        data: null
    }
}

exports.updateCourseQuiz = async (id, payload) => {
    const course_quiz = await db.course_quiz.update(payload, { where: { id } })

    if (!course_quiz) {
        throw new Error('Course text update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseQuiz = async (id) => {
    const course_quiz = await db.course_quiz.destroy({ where: { id } })

    if (!course_quiz) {
        throw new Error('Destroy course text failed.')
    }

    return {
        data: null
    }
}

exports.findCourseQuiz = async (id) => {
    const course_quiz = await db.course_quiz.findOne({
        where: { id },
        attributes: courseQuizResource
    })

    if (!course_quiz) {
        throw new Error('Course text not found.')
    }

    return {
        data: course_quiz
    }
}

exports.getCourseQuizzes = async () => {
    const course_quiz = await db.course_quiz.findAll({
        attributes: courseQuizResource
    })

    return {
        data: course_quiz
    }
}