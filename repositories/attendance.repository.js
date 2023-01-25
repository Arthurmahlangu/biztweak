const db = require("../models")
const attendanceResource = require("../resources/attendance.resource")

exports.createAttendance = async (payload) => {
    const attendance = await db.attendance.create(payload)

    if (!attendance) {
        throw new Error('Attendance creation failed.')
    }

    return {
        data: null
    }
}

exports.updateAttendance = async (id, payload) => {
    const attendance = await db.attendance.update(payload, { where: { id } })

    if (!attendance) {
        throw new Error('Attendance update failed.')
    }

    return {
        data: null
    }
}

exports.deleteAttendance = async (id) => {
    const attendance = await db.attendance.destroy({ where: { id } })

    if (!attendance) {
        throw new Error('Destroy attendance failed.')
    }

    return {
        data: null
    }
}

exports.findAttendance = async (id) => {
    const attendance = await db.attendance.findOne({
        where: { id },
        attributes: attendanceResource
    })

    if (!attendance) {
        throw new Error('Attendance not found.')
    }

    return {
        data: attendance
    }
}

exports.getAttendances = async () => {
    const attendance = await db.attendance.findAll({
        attributes: attendanceResource
    })

    return {
        data: attendance
    }
}