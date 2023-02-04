const db = require("../models")
const courseVideoResource = require("../resources/course_video.resource")

exports.createCourseVideo = async (payload) => {
    const course_video = await db.course_video.create(payload)

    if (!course_video) {
        throw new Error('Course video creation failed.')
    }

    const { data } = await this.findCourseVideo(course_video.id)

    return {
        data
    }
}

exports.updateCourseVideo = async (id, payload) => {
    const course_video = await db.course_video.update(payload, { where: { id } })

    if (!course_video) {
        throw new Error('Course video update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseVideo = async (id) => {
    const course_video = await db.course_video.destroy({ where: { id } })

    if (!course_video) {
        throw new Error('Destroy course video failed.')
    }

    return {
        data: null
    }
}

exports.findCourseVideo = async (id) => {
    const course_video = await db.course_video.findOne({
        where: { id },
        attributes: courseVideoResource
    })

    if (!course_video) {
        throw new Error('Course video not found.')
    }

    return {
        data: course_video
    }
}

exports.getCourseVideos = async () => {
    const course_video = await db.course_video.findAll({
        attributes: courseVideoResource
    })

    return {
        data: course_video
    }
}