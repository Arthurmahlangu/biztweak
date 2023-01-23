const { successResponse, failResponse } = require("../helpers/methods")
const { createUser, updateUserProfile, updateEmail, updatePassword, deleteUserAccount, getUsers, findUser } = require("../services/user.service")

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createRootUser = async (req, res) => {
    try {

        const { 
            fullNames, email
        } = req.body
    
        const { data } = await createUser(fullNames, email, 'ROOT')
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createAdminUser = async (req, res) => {
    try {

        const { 
            fullNames, email
        } = req.body
    
        const { data } = await createUser(fullNames, email, 'ADMIN')
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createEntrepreneurUser = async (req, res) => {
    try {

        const { 
            fullNames, email
        } = req.body
    
        const { data } = await createUser(fullNames, email, 'ENTREPRENEUR')
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateUserProfile = async (req, res) => {
    try {

        const payload = req.body

        const { data } = await updateUserProfile(req.params.id, payload, req.files)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateEmail = async (req, res) => {
    try {
    
        const { data } = await updateEmail(req.params.id, req.body.email)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updatePassword = async (req, res) => {
    try {
    
        const { data } = await updatePassword(req.params.id, req.body.password)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteUserAccount = async (req, res) => {
    try {
    
        const { data } = await deleteUserAccount(req.params.id)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getUsers = async (req, res) => {
    try {
    
        const { data } = await getUsers()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.findUser = async (req, res) => {
    try {
    
        const { data } = await findUser(req.params.id)
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}