const db = require("../models")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createCourse = async (payload) => {
    try {
        const course = await db.course.findOne({ where: { title: payload.title } })

        if (course) {
            throw new Error('Course title already taken.')
        }
        
        const newCourse = await db.course.create(payload)

        if (!newCourse) {
            throw new Error('Course creation failed.')
        }

        return {
            error: false,
            data: newCourse
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.createCourseAudio = async (payload) => {
    try {
        
        const newCourse = await db.course_audio.create(payload)

        if (!newCourse) {
            throw new Error('Failed adding course audio.')
        }

        return {
            error: false,
            data: newCourse
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.createCourseVideo = async (payload) => {
    try {
        
        const newCourse = await db.course_video.create(payload)

        if (!newCourse) {
            throw new Error('Failed adding course video.')
        }

        return {
            error: false,
            data: newCourse
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getCourses = async () => {
    try {
        
        const courses = await db.course.findAll()

        return {
            error: false,
            data: courses
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getCourse = async (id) => {
    try {

        const course = await db.course.findOne({ where: { id } })

        if (!course) {
            throw new Error('Course not found.')
        }

        return {
            error: false,
            data: course
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateCourse = async (id, payload = {}) => {
    try {

        const course = await db.course.findOne({ where: { id } })

        if (!course) {
            throw new Error('Course not found.')
        }

        const newCourse = await db.course.update(payload, { where: { id } })

        if (!newCourse) {
            throw new Error('Update failed.')
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.deleteCourse = async (id) => {
    try {

        const course = await db.course.findOne({ where: { id } })

        if (!course) {
            throw new Error('Course not found.')
        }

        await db.course.destroy({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}