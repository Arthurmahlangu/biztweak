const db = require("../models")
const userResource = require("../resources/user.resource")
const phaseResource = require("../resources/phase.resource")
const industryResource = require("../resources/industry.resource")
const assessmentResource = require("../resources/assessment.resource")
const companyResource = require("../resources/company.resource")

exports.createCompany = async (payload) => {
    const company = await db.company.create(payload)

    if (!company) {
        throw new Error('Company creation failed.')
    }

    return {
        data: await this.findCompany(company.id)
    }
}

exports.updateCompany = async (id, payload) => {
    const company = await db.company.update(payload, { where: { id } })

    if (!company) {
        throw new Error('Company update failed.')
    }

    return {
        data: null
    }
}

exports.deleteCompany = async (id) => {
    const company = await db.company.destroy({ where: { id } })

    if (!company) {
        throw new Error('Destroy company failed.')
    }

    return {
        data: null
    }
}

exports.findCompany = async (id) => {
    const company = await db.company.findOne({
        where: { id },
        attributes: companyResource,
        include: [
            {
                model: db.user,
                attributes: userResource
            },
            {
                model: db.phase,
                attributes: phaseResource
            },
            {
                model: db.industry,
                attributes: industryResource
            },
            {
                model: db.assessment,
                attributes: assessmentResource
            }
        ]
    })

    if (!company) {
        throw new Error('Company not found.')
    }

    if (company.assessment) {
        if (company.assessment.questionsAndAnswers) {
            company.assessment.questionsAndAnswers = JSON.parse(company.assessment.questionsAndAnswers)
        }
        if (company.assessment.recommendedModules) {
            company.assessment.recommendedModules = JSON.parse(company.assessment.recommendedModules)
        }
        if (company.assessment.report) {
            company.assessment.report = JSON.parse(company.assessment.report)
        }
    }

    return {
        data: company
    }
}

exports.getCompanies = async () => {
    const companies = await db.company.findAll({
        attributes: companyResource
    })

    companies.count = companies.length

    return {
        data: companies
    }
}

exports.getMyCompanies = async (userId) => {
    const companies = await db.company.findAll({
        where: { userId },
        attributes: companyResource,
        include: [
            {
                model: db.user,
                attributes: userResource
            },
            {
                model: db.phase,
                attributes: phaseResource
            },
            {
                model: db.industry,
                attributes: industryResource
            },
            {
                model: db.assessment,
                attributes: assessmentResource
            }
        ]
    })

    if (!companies) {
        throw new Error('Company not found.')
    }

    companies.forEach((company) => {
        if (company.assessment) {
            if (company.assessment.questionsAndAnswers) {
                company.assessment.questionsAndAnswers = JSON.parse(company.assessment.questionsAndAnswers)
            }
            if (company.assessment.recommendedModules) {
                company.assessment.recommendedModules = JSON.parse(company.assessment.recommendedModules)
            }
            if (company.assessment.report) {
                company.assessment.report = JSON.parse(company.assessment.report)
            }
        }
    })

    companies.count = companies.length
        
    return {
        data: companies
    }
}