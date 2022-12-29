const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createCourse, 
    getCourses, 
    getCourse, 
    updateCourse, 
    deleteCourse,
    createCourseAudio,
    createCourseVideo 
} = require("../services/course.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourse = async (req, res) => {

    let service = null
    const { title, description } = req.body
    
    if (req.files) {
        
        const { logo } = req.files

        const now = new Date().getTime()
        const filePath = "./storage/company/" + now + "_" + logo.name

        if (logo.mimetype !== 'image/png' || logo.mimetype !== 'image/jpeg') {
            res.status(400).send(
                failResponse("Invalid png|jpg|jpeg file.")
            )
        }
        
        service = await createCourse({
            userid: req.auth.id, title, description, logo: filePath
        })
        
        await logo.mv(filePath)

    } else {

        service = await createCourse({
            userid: req.auth.id, title, description
        })
    }

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseVideo = async (req, res) => {

    let service = null

    const { id } = req.params
    const { name, description, type, video } = req.body
    
    if (req.files) {
        
        const { video } = req.files

        const now = new Date().getTime()
        const filePath = "./storage/videos/" + now + "_" + video.name

        if (audio.mimetype !== 'video/mp4' || audio.mimetype !== 'video/mpeg') {
            res.status(400).send(
                failResponse("Invalid mp4|mpeg file.")
            )
        }
        
        service = await createCourseVideo({
            userid: req.auth.id, courseid: id, name, description, type, file: filePath
        })

        await video.mv(filePath)

    } else {

        service = await createCourseAudio({
            userid: req.auth.id, courseid: id, name, description, type, file: video
        })
    }

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourseAudio = async (req, res) => {

    let service = null

    const { id } = req.params
    const { name, description, type, audio } = req.body
    
    if (req.files) {
        
        const { audio } = req.files

        const now = new Date().getTime()
        const filePath = "./storage/audios/" + now + "_" + audio.name

        if (audio.mimetype !== 'audio/mpeg' || audio.mimetype !== 'audio/wav') {
            res.status(400).send(
                failResponse("Invalid mp3|wav file.")
            )
        }

        service = await createCourseAudio({
            userid: req.auth.id, courseid: id, name, description, type, file: filePath
        })

        await audio.mv(filePath)

    } else {

        service = await createCourseAudio({
            userid: req.auth.id, courseid: id, name, description, type, file: audio
        })
    }

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourses = async (req, res) => {

    const service = await getCourses() 
    
    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getCourse = async (req, res) => {

    const service = await getCourse(req.params.id)

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateCourse = async (req, res) => {

    let service = null
    const { title, description } = req.body
    
    if (req.files) {
        
        const { logo } = req.files

        const now = new Date().getTime()
        const filePath = "./storage/company/" + now + "_" + logo.name

        await logo.mv(filePath)

        service = await updateCourse(req.params.id, {
            title, description, logo: filePath
        })

    } else {

        service = await updateCourse(req.params.id, {
            title, description
        })
    }

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Updated.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteCourse = async (req, res) => {

    const service = await deleteCourse(req.params.id)

    if (service.error) {
        res.status(400).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Deleted.", {
            data: []
        })
    )
}
