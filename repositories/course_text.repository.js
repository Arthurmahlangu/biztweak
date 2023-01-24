const db = require("../models")
const courseTextResource = require("../resources/course_text.resource")

exports.createCourseText = async (payload) => {
    const course_text = await db.course_text.create(payload)

    if (!course_text) {
        throw new Error('Course text creation failed.')
    }

    return {
        data: null
    }
}

exports.updateCourseText = async (id, payload) => {
    const course_text = await db.course_text.update(payload, { where: { id } })

    if (!course_text) {
        throw new Error('Course text update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseText = async (id) => {
    const course_text = await db.course_text.destroy({ where: { id } })

    if (!course_text) {
        throw new Error('Destroy course text failed.')
    }

    return {
        data: null
    }
}

exports.findCourseText = async (id) => {
    const course_text = await db.course_text.findOne({
        where: { id },
        attributes: courseTextResource
    })

    if (!course_text) {
        throw new Error('Course text not found.')
    }

    return {
        data: course_text
    }
}

exports.getCourseTexts = async () => {
    const course_text = await db.course_text.findAll({
        attributes: courseTextResource
    })

    return {
        data: course_text
    }
}