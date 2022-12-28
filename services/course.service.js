const db = require("../models")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createCourse = async (payload) => {
    try {
        const course = await db.course.findOne({ where: { title: payload.title } })

        if (course) {
            return {
                error: true,
                message: 'Course title already been taken.'
            }
        }
        
        const newCourse = await db.course.create(payload)

        if (!newCourse) {
            return {
                error: true,
                message: 'Course registration failed.'
            }
        }

        return {
            error: false,
            data: newCourse
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.createCourseAudio = async (payload) => {
    try {
        
        const newCourse = await db.course_audio.create(payload)

        if (!newCourse) {
            return {
                error: true,
                message: 'Error adding course audio.'
            }
        }

        return {
            error: false,
            data: newCourse
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.createCourseVideo = async (payload) => {
    try {
        
        const newCourse = await db.course_video.create(payload)

        if (!newCourse) {
            return {
                error: true,
                message: 'Error adding course video.'
            }
        }

        return {
            error: false,
            data: newCourse
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
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
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getCourse = async (id) => {
    try {

        const course = await db.course.findOne({ where: { id } })

        if (!course) {
            return {
                error: true,
                message: 'Course not found.'
            }
        }

        return {
            error: false,
            data: course
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateCourse = async (id, payload = {}) => {
    try {

        const course = await db.course.findOne({ where: { id } })

        if (!course) {
            return {
                error: true,
                message: 'Course not found.'
            }
        }

        const newCourse = await db.course.update(payload, { where: { id } })

        if (!newCourse) {
            return {
                error: true,
                message: 'Course update failed.'
            }
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.deleteCourse = async (id) => {
    try {

        const course = await db.course.findOne({ where: { id } })

        if (!course) {
            return {
                error: true,
                message: 'Course not found.'
            }
        }

        await db.course.destroy({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error("Technical error: " + error.message)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}