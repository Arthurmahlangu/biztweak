const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createCourse, 
    getCourses, 
    getCourse, 
    updateCourse, 
    deleteCourse 
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

        await logo.mv(filePath)

        service = await createCourse({
            userid: req.auth.id, title, description, logo: filePath
        })

    } else {

        service = await createCourse({
            userid: req.auth.id, title, description
        })
    }

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Course created", {
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
        successResponse("Courses.", {
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
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Course", {
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
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Updated", {
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
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Delete Course", {
            data: []
        })
    )
}
