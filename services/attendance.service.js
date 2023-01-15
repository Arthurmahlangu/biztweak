const db = require("../models")
const UserResource = require("../resources/user.resource")
const AttendanceResource = require("../resources/attendance.resource")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createAttendance = async (payload) => {
    try {
        
        const newAttendance = await db.attendance.create(payload)

        if (!newAttendance) {
            throw new Error('Attendance not created.')
        }

        const { data } = await this.getAttendance(newAttendance.id)

        return {
            error: false,
            data
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getAttendances = async () => {
    try {
        
        const attendance = await db.attendance.findAll({ 
            attributes: AttendanceResource,
            include: [
                {
                    model: db.user,
                    attributes: UserResource
                }
            ]
        })

        return {
            error: false,
            data: attendance
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getAttendance = async (id) => {
    try {

        const attendance = await db.attendance.findOne({ 
            where: { id },
            attributes: AttendanceResource,
            include: [
                {
                    model: db.user,
                    attributes: UserResource
                }
            ]
        })

        if (!attendance) {
            throw new Error('Attendance not found.')
        }

        return {
            error: false,
            data: attendance
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateAttendance = async (id, payload = {}) => {
    try {

        const attendance = await db.attendance.findOne({ where: { id } })

        if (!attendance) {
            throw new Error('Attendance not found.')
        }

        const newAttendance = await db.attendance.update(payload, { where: { id } })

        if (!newAttendance) {
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

exports.deleteAttendance = async (id) => {
    try {

        const attendance = await db.attendance.findOne({ where: { id } })

        if (!attendance) {
            throw new Error('Attendance not found.')
        }

        await db.attendance.destroy({ where: { id } })

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