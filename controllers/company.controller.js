const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createCompany, 
    getCompanies, 
    getCompany, 
    updateCompany, 
    deleteCompany,
    createCompanyAssessments
} = require("../services/company.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCompany = async (req, res) => {

    const { name, location, phase, registered, industry, employers, turnover } = req.body
    const service = await createCompany({
        userid: req.auth.id, name, location, phase, registered, industry, employers, turnover
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Company created", {
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
exports.getCompanies = async (req, res) => {

    const service = await getCompanies() 
    
    res.send(
        successResponse("Companies.", {
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
exports.getCompany = async (req, res) => {

    const service = await getCompany(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("company", {
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
exports.updateCompany = async (req, res) => {

    const { name, location, phase, registered, industry, employers, turnover } = req.body
    const service = await updateCompany(req.params.id, {
        name, location, phase, registered, industry, employers, turnover
    })

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
exports.deleteCompany = async (req, res) => {

    const service = await deleteCompany(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Delete company", {
            data: []
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCompanyAssessments = async (req, res) => {

    const { id } = req.params
    const { answers } = req.body
    const service = await createCompanyAssessments({
        userid: req.auth.id, companyid: id, answers
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Assessment answers", {
            data: service.data
        })
    )
}
