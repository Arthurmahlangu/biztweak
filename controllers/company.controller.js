const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createCompany, 
    getCompany, 
    getCompanies,
    updateCompany, 
    deleteCompany,
    createCompanyAssessments,
    updateCompanyAssessments,
    getCompanyAssessments,
    getMyCompanies
} = require("../services/company.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createCompany = async (req, res) => {

    const { name, location, phase, registered, registration_number, registration_date, products_or_services, industry, employees, monthly_turnover, annual_turnover } = req.body

    if (req.files && req.files.logo) {

        const { logo } = req.files

        const now = new Date().getTime()
        const filePath = "./storage/company/" + now + "_" + logo.name

        if (logo.mimetype !== 'image/png' && logo.mimetype !== 'image/jpeg') {
            return res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                failResponse("Invalid png|jpg|jpeg file.")
            )
        }

        const service = await createCompany({
            userid: req.auth.id, name, logo: filePath, location, phase, registered, registration_number, registration_date, products_or_services, industry, employees, monthly_turnover, annual_turnover
        })

        if (service.error) {
            res.status(parseInt(process.env.EXCEPTION_CODE)).send(
                failResponse(service.message)
            )
        }

        if (!service.error) {
            await logo.mv(filePath)
        }

        res.send(
            successResponse("Successful.", {
                data: service.data
            })
        )

    } else {
        const service = await createCompany({
            userid: req.auth.id, name, location, phase, registered, registration_number, registration_date, products_or_services, industry, employees, monthly_turnover, annual_turnover
        })

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
exports.getCompany = async (req, res) => {

    const service = await getCompany(req.params.id)

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
exports.updateCompany = async (req, res) => {

    const { name, location, phase, registered, registration_number, registration_date, products_or_services, industry, employees, monthly_turnover, annual_turnover } = req.body
    const service = await updateCompany(req.params.id, {
        name, location, phase, registered, registration_number, registration_date, products_or_services, industry, employees, monthly_turnover, annual_turnover
    })

    if (service.error) {
        res.send(
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
exports.deleteCompany = async (req, res) => {

    const service = await deleteCompany(req.params.id)

    if (service.error) {
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Deleted.", {
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
exports.getCompanyAssessments = async (req, res) => {
    const service = await getCompanyAssessments(req.params.cid, req.params.aid)

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
exports.updateCompanyAssessments = async (req, res) => {

    const { answers } = req.body
    const { cid, aid } = req.params
    const service = await updateCompanyAssessments(cid, aid, { answers })

    if (service.error) {
        res.status(parseInt(process.env.EXCEPTION_CODE)).send(
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
exports.getMyCompanies = async (req, res) => {

    const service = await getMyCompanies(req.auth.id) 
    
    res.send(
        successResponse("Successful.", {
            data: service.data
        })
    )
}