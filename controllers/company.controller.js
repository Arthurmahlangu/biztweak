const { successResponse, failResponse } = require("../helpers/methods")
const assessmentService = require("../services/assessment.service")
const companyService = require("../services/company.service")

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
exports.createCompany = async (req, res) => {
    try {
    
        const payload = req.body
        
        payload.userId = req.auth.id

        const { data } = await companyService.createCompany(payload, req.files)
    
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
exports.updateCompany = async (req, res) => {
    try {
    
        const { data } = await companyService.updateCompany(req.params.id, req.body, req.files)
    
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
exports.deleteCompany = async (req, res) => {
    try {
    
        const { data } = await companyService.deleteCompany(req.params.id)
    
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
exports.getCompanies = async (req, res) => {
    try {
    
        const { data } = await companyService.getCompanies()
    
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
exports.findCompany = async (req, res) => {
    try {
    
        const { data } = await companyService.findCompany(req.params.id)
    
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
exports.getMyCompanies = async (req, res) => {
    try {
    
        const { data } = await companyService.getMyCompanies(req.auth.id)
    
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
exports.createCompanyAssessment = async (req, res) => {
    try {
    
        const payload = req.body
        
        payload.userId = req.auth.id
        payload.companyId = req.params.id

        const { data } = await assessmentService.createAssessment(payload)
    
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