const db = require("../models")
const courseTestResource = require("../resources/course_test.resource")

exports.createCourseTest = async (payload) => {
    const course_test = await db.course_test.create(payload)

    if (!course_test) {
        throw new Error('Course test creation failed.')
    }

    const { data } = await this.findCourseTest(course_test.id)

    return {
        data
    }
}

exports.updateCourseTest = async (id, payload) => {
    const course_test = await db.course_test.update(payload, { where: { id } })

    if (!course_test) {
        throw new Error('Course test update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseTest = async (id) => {
    const course_test = await db.course_test.destroy({ where: { id } })

    if (!course_test) {
        throw new Error('Destroy course test failed.')
    }

    return {
        data: null
    }
}

exports.findCourseTest = async (id) => {
    const course_test = await db.course_test.findOne({
        where: { id },
        attributes: courseTestResource
    })

    if (!course_test) {
        throw new Error('Course test not found.')
    }

    return {
        data: course_test
    }
}

exports.getCourseTests = async () => {
    const course_test = await db.course_test.findAll({
        attributes: courseTestResource
    })

    return {
        data: course_test
    }
}