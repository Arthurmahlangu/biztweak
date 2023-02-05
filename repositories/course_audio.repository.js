const db = require("../models")
const courseAudioResource = require("../resources/course_audio.resource")

exports.createCourseAudio = async (payload) => {
    const course_audio = await db.course_audio.create(payload)

    if (!course_audio) {
        throw new Error('Course audio creation failed.')
    }

    const { data } = await this.findCourseAudio(course_audio.id)

    return {
        data
    }
}

exports.updateCourseAudio = async (id, payload) => {
    const course_audio = await db.course_audio.update(payload, { where: { id } })

    if (!course_audio) {
        throw new Error('Course audio update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseAudio = async (id) => {
    const course_audio = await db.course_audio.destroy({ where: { id } })

    if (!course_audio) {
        throw new Error('Destroy course audio failed.')
    }

    return {
        data: null
    }
}

exports.findCourseAudio = async (id) => {
    const course_audio = await db.course_audio.findOne({
        where: { id },
        attributes: courseAudioResource
    })

    if (!course_audio) {
        throw new Error('Course audio not found.')
    }

    return {
        data: course_audio
    }
}

exports.getCourseAudios = async () => {
    const course_audio = await db.course_audio.findAll({
        attributes: courseAudioResource
    })

    return {
        data: course_audio
    }
}