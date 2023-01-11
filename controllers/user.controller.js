const { successResponse, failResponse } = require("../helpers/methods")
const uploader = require("../helpers/uploader")
const { 
    getUsers, 
    getUser, 
    updateUser, 
    updatePassword, 
    createSuperUser, 
    createAdminUser,
    createMentorUser
} = require("../services/user.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createSuperAccount = async (req, res) => {

    const { fullname, email, password } = req.body

    const service = await createSuperUser(fullname, email, password)

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
exports.createAdminAccount = async (req, res) => {

    const { fullname, email, password } = req.body

    const service = await createAdminUser(fullname, email, password)

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
exports.createMentorAccount = async (req, res) => {

    const { fullname, email, password } = req.body

    const service = await createMentorUser(fullname, email, password)

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
exports.getUsers = async (req, res) => {

    const service = await getUsers() 
    
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
exports.getUser = async (req, res) => {

    const service = await getUser(req.params.id)

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
exports.updateProfile = async (req, res) => {

    let service = null

    const { 
        fullname, 
        phone, 
        education, 
        work_experience, 
        work_experience2, 
        location,
        registered,
        market_newsletter,
        product_updates_and_community_announcements
    } = req.body

    if (req.files && req.files.photo) {

        const upload = await uploader(req.files.photo, "profiles", [
            "image/png", "image/jpg", "image/jpeg"
        ])

        if (upload.error) {
            return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                failResponse(upload.message)
            )
        }

        service = await updateUser(req.params.id, {
            fullname, 
            phone, 
            education, 
            work_experience, 
            work_experience2, 
            location,
            registered,
            photo: upload.data,
            market_newsletter,
            product_updates_and_community_announcements
        })
    } else {
        service = await updateUser(req.params.id, {
            fullname, 
            phone, 
            education, 
            work_experience, 
            work_experience2, 
            location
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
exports.updateEmail = async (req, res) => {

    const { email } = req.body
    const service = await updateUser(req.params.id, { email })

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
exports.updatePassword = async (req, res) => {

    const { password } = req.body

    const service = await updatePassword(req.params.id, password)

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
exports.updateRole = async (req, res) => {

    const { role } = req.body

    const service = await updateUser(req.params.id, { role })

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
