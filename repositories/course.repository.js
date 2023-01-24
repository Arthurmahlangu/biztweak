const db = require("../models")
const courseResource = require("../resources/course.resource")

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
        attributes: courseResource
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
        attributes: courseResource
    })

    return {
        data: course
    }
}