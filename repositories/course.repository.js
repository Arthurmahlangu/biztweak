const db = require("../models")
const userResource = require("../resources/user.resource")
const courseResource = require("../resources/course.resource")
const courseDocumentResource = require("../resources/course_document.resource")
const courseAudioResource = require("../resources/course_audio.resource")
const courseVideoResource = require("../resources/course_video.resource")
const courseTextResource = require("../resources/course_text.resource")
const courseTestResource = require("../resources/course_test.resource")
const courseQuizResource = require("../resources/course_quiz.resource")

exports.createCourse = async (payload) => {
    const course = await db.course.create(payload)

    if (!course) {
        throw new Error('Course creation failed.')
    }

    return {
        data: null
    }
}

exports.updateCourse = async (id, payload) => {
    const course = await db.course.update(payload, { where: { id } })

    if (!course) {
        throw new Error('Course update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourse = async (id) => {
    const course = await db.course.destroy({ where: { id } })

    if (!course) {
        throw new Error('Destroy course failed.')
    }

    return {
        data: null
    }
}

exports.findCourse = async (id) => {
    const course = await db.course.findOne({
        where: { id },
        attributes: courseResource,
        include: [
            {
                model: db.course_document,
                as: 'documents',
                attributes: courseDocumentResource
            },
            {
                model: db.course_audio,
                as: 'audios',
                attributes: courseAudioResource
            },
            {
                model: db.course_video,
                as: 'videos',
                attributes: courseVideoResource
            },
            {
                model: db.course_text,
                as: 'texts',
                attributes: courseTextResource
            },
            {
                model: db.course_test,
                as: 'tests',
                attributes: courseTestResource
            },
            {
                model: db.user,
                attributes: userResource
            }
        ]
    })

    if (!course) {
        throw new Error('Course not found.')
    }

    return {
        data: course
    }
}

exports.getCourses = async () => {
    const course = await db.course.findAll({
        attributes: courseResource,
        include: [
            {
                model: db.user,
                attributes: UserResource
            }
        ]
    })

    return {
        data: course
    }
}