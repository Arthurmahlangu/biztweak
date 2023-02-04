const db = require("../models")
const courseDocumentResource = require("../resources/course_document.resource")

exports.createCourseDocument = async (payload) => {
    const course_document = await db.course_document.create(payload)

    if (!course_document) {
        throw new Error('Course document creation failed.')
    }

    const { data } = await this.findCourseDocument(course_document.id)

    return {
        data
    }
}

exports.updateCourseDocument = async (id, payload) => {
    const course_document = await db.course_document.update(payload, { where: { id } })

    if (!course_document) {
        throw new Error('Course document update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCourseDocument = async (id) => {
    const course_document = await db.course_document.destroy({ where: { id } })

    if (!course_document) {
        throw new Error('Destroy course document failed.')
    }

    return {
        data: null
    }
}

exports.findCourseDocument = async (id) => {
    const course_document = await db.course_document.findOne({
        where: { id },
        attributes: courseDocumentResource
    })

    if (!course_document) {
        throw new Error('Course document not found.')
    }

    return {
        data: course_document
    }
}

exports.getCourseDocuments = async () => {
    const course_document = await db.course_document.findAll({
        attributes: courseDocumentResource
    })

    return {
        data: course_document
    }
}