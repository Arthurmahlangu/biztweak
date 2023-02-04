const db = require("../models")
const courseQuizResource = require("../resources/course_quiz.resource")

exports.createCourseQuiz = async (payload) => {
    const course_audio = await db.course_audio.create(payload)

    if (!course_audio) {
        throw new Error('Course text creation failed.')
    }

    const { data } = await this.findCourseQuiz(course_audio.id)

    return {
        data
    }
}

exports.updateCourseQuiz = async (id, payload) => {
    const course_audio = await db.course_audio.update(payload, { where: { id } })

    if (!course_audio) {
        throw new Error('Course text update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseQuiz = async (id) => {
    const course_audio = await db.course_audio.destroy({ where: { id } })

    if (!course_audio) {
        throw new Error('Destroy course text failed.')
    }

    return {
        data: null
    }
}

exports.findCourseQuiz = async (id) => {
    const course_audio = await db.course_audio.findOne({
        where: { id },
        attributes: courseQuizResource
    })

    if (!course_audio) {
        throw new Error('Course text not found.')
    }

    return {
        data: course_audio
    }
}

exports.getCourseQuizzes = async () => {
    const course_audio = await db.course_audio.findAll({
        attributes: courseQuizResource
    })

    return {
        data: course_audio
    }
}