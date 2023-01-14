const { successResponse, failResponse } = require("../helpers/methods")
const uploader = require("../helpers/uploader")
const { 
    createCourse, 
    getCourses, 
    getCourse, 
    updateCourse, 
    deleteCourse,
    createCourseAudio,
    createCourseVideo, 
    getMyCourses,
    createCourseText
} = require("../services/course.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCourse = async (req, res) => {

    let service = null

    const { 
        title, 
        description, 
        category,
        intro_video,
        start_datetime, 
        expiry_datetime, 
        business_phase, 
        score 
    } = req.body
    
    if (req.files) {

        let logo = null
        let intro_video = null

        if (req.files.logo) {
            const upload = await uploader(req.files.logo, "courses", [
                "image/png", "image/jpg", "image/jpeg"
            ])
    
            if (upload.error) {
                return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                    failResponse(upload.message)
                )
            }

            logo = upload.data
        }

        if (req.files.intro_video) {
            const upload = await uploader(req.files.intro_video, "courses", [
                "video/mp4", "video/mpeg"
            ])
    
            if (upload.error) {
                return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                    failResponse(upload.message)
                )
            }

            intro_video = upload.data
        }
        
        service = await createCourse({
            userid: req.auth.id, 
            title, 
            description, 
            category,
            logo, 
            intro_video,
            start_datetime, 
            expiry_datetime, 
            business_phase, 
            score
        })

    } else {
        service = await createCourse({
            userid: req.auth.id, 
            title, 
            description, 
            category,
            intro_video,
            start_datetime, 
            expiry_datetime, 
            business_phase, 
            score
        })
    }

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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

    const { 
        name, 
        description, 
        type,
        audio 
    } = req.body
    
    if (req.files && req.files.audio) {

        const upload = await uploader(req.files.audio, "courses", [
            "audio/mpeg", "audio/wav"
        ])

        if (upload.error) {
            return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                failResponse(upload.message)
            )
        }

        service = await createCourseAudio({
            userid: req.auth.id, 
            courseid: req.params.id, 
            name, 
            description, 
            type, 
            file: upload.data
        })

    } else {
        service = await createCourseAudio({
            userid: req.auth.id, 
            courseid: req.params.id, 
            name, 
            description, 
            type, 
            file: audio
        })
    }

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.createCourseText = async (req, res) => {

    let service = null

    const { 
        name, 
        description, 
        type,
        file 
    } = req.body
    
    if (req.files && req.files.file) {

        const upload = await uploader(req.files.file, "courses", [
            "application/pdf", 
            "application/msword", 
            "application/msword", 
            "text/plain", 
            "application/vnd.ms-excel", 
            "application/vnd.ms-excel", 
            "application/vnd.ms-excel",
            "application/vnd.ms-powerpoint",
            "application/vnd.ms-powerpoint",
            "application/vnd.ms-powerpoint",
            "application/vnd.ms-powerpoint"
        ])

        if (upload.error) {
            return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                failResponse(upload.message)
            )
        }
        
        service = await createCourseText({
            userid: req.auth.id, 
            courseid: req.params.id, 
            name, 
            description, 
            type, 
            file: upload.data
        })

    } else {
        service = await createCourseText({
            userid: req.auth.id, 
            courseid: req.params.id, 
            name, 
            description, 
            type, 
            file
        })
    }

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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

    const { 
        name, 
        description, 
        type,
        video 
    } = req.body
    
    if (req.files && req.files.video) {

        const upload = await uploader(req.files.video, "courses", [
            "video/mp4", "video/mpeg"
        ])

        if (upload.error) {
            return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                failResponse(upload.message)
            )
        }
        
        service = await createCourseVideo({
            userid: req.auth.id, 
            courseid: req.params.id, 
            name, 
            description, 
            type, 
            file: upload.data
        })

    } else {
        service = await createCourseVideo({
            userid: req.auth.id, 
            courseid: req.params.id, 
            name, 
            description, 
            type, 
            file: video
        })
    }

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.getMyCourses = async (req, res) => {

    const service = await getMyCourses(req.auth.id) 
    
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
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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

    const { 
        title, 
        description, 
        category,
        intro_video,
        start_datetime, 
        expiry_datetime, 
        business_phase, 
        score 
    } = req.body
    
    if (req.files) {

        let logo = null
        let intro_video = null

        if (req.files.logo) {
            const upload = await uploader(req.files.logo, "courses", [
                "image/png", "image/jpg", "image/jpeg"
            ])
    
            if (upload.error) {
                return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                    failResponse(upload.message)
                )
            }

            logo = upload.data
        }

        if (req.files.intro_video) {
            const upload = await uploader(req.files.intro_video, "courses", [
                "video/mp4", "video/mpeg"
            ])
    
            if (upload.error) {
                return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                    failResponse(upload.message)
                )
            }

            intro_video = upload.data
        }

        service = await updateCourse(req.params.id, {
            title, 
            description, 
            category,
            logo,
            intro_video,
            start_datetime, 
            expiry_datetime, 
            business_phase, 
            score
        })

    } else {
        service = await updateCourse(req.params.id, {
            title, 
            description, 
            category,
            intro_video,
            start_datetime, 
            expiry_datetime, 
            business_phase, 
            score
        })
    }

    if (service.error) {
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
        return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Deleted.", {
            data: []
        })
    )
}
