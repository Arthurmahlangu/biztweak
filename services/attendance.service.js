const attendanceRepository = require("../repositories/attendance.repository")

exports.createAttendance = async (payload) => {
    const {
        userId,
        category,
        type,
        date,
        attended
    } = payload

    const attendance = await attendanceRepository.createAttendance({
        userId,
        category,
        type,
        date,
        attended
    })

    return attendance
}

exports.updateAttendance = async (id, payload) => {
    const {
        category,
        type,
        date,
        attended
    } = payload

    const attendance = await attendanceRepository.updateAttendance(id, {
        category,
        type,
        date,
        attended
    })

    return attendance
}


exports.deleteAttendance = async (id) => {
    const attendance = await attendanceRepository.deleteAttendance(id)

    return attendance
}

exports.getAttendances = async () => {
    const attendance = await attendanceRepository.getAttendances()

    return attendance
}

exports.findAttendance = async (id) => {
    const attendance = await attendanceRepository.findAttendance(id)

    return attendance
}