const { successResponse, failResponse } = require("../helpers/methods")
const { getUsers, getUser, updateUser, updatePassword } = require("../services/user.service")

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
exports.updateProfile = async (req, res) => {

    const { 
        fullname, 
        phone, 
        education, 
        work_experience, 
        work_experience2, 
        location 
    } = req.body

    const service = await updateUser(req.params.id, {
        fullname, 
        phone, 
        education, 
        work_experience, 
        work_experience2, 
        location
    })

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
exports.updateEmail = async (req, res) => {

    const { email } = req.body
    const service = await updateUser(req.params.id, { email })

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
exports.updatePassword = async (req, res) => {

    const { password } = req.body

    const service = await updatePassword(req.params.id, password)

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
exports.updateRole = async (req, res) => {

    const { role } = req.body

    const service = await updateUser(req.params.id, { role })

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
