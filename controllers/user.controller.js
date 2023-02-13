const { successResponse, failResponse } = require("../helpers/methods")
const userService = require("../services/user.service")

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
    
        const { data } = await userService.createUser(fullNames, email, 'ROOT')
    
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
    
        const { data } = await userService.createUser(fullNames, email, 'ADMIN')
    
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
    
        const { data } = await userService.createUser(fullNames, email, 'ENTREPRENEUR')
    
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

        const { data } = await userService.updateUserProfile(req.params.id, payload, req.files)
    
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
    
        const { data } = await userService.updateEmail(req.params.id, req.body.email)
    
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
    
        const { data } = await userService.updatePassword(req.params.id, req.body.password)
    
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
    
        const { data } = await userService.deleteUserAccount(req.params.id)
    
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

        let users = null
        
        if (req.query) {
            if (req.query.role) {
                console.log(req.query)
                const { data } = await userService.getUsersByRole(req.query.role)
                users = data
            }
        }
    
        const { data } = await userService.getUsers()

        if (!users) {
            users = data
        }
    
        return res.send(
            successResponse("Success", {
                data: users,
                count: data.count,
                countROOT: data.countROOT,
                countADMIN: data.countADMIN,
                countINCUBATOR: data.countINCUBATOR,
                countENTREPRENEUR: data.countENTREPRENEUR
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
    
        const { data } = await userService.findUser(req.params.id)
    
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