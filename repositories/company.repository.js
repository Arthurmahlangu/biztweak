const db = require("../models")
const userResource = require("../resources/user.resource")
const phaseResource = require("../resources/phase.resource")
const industryResource = require("../resources/industry.resource")
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
            }
        ]
    })

    if (!company) {
        throw new Error('Company not found.')
    }

    return {
        data: company
    }
}

exports.getCompanies = async () => {
    const company = await db.company.findAll({
        attributes: companyResource
    })

    return {
        data: company
    }
}

exports.getMyCompanies = async (userId) => {
    const company = await db.company.findAll({
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
            }
        ]
    })

    return {
        data: company
    }
}