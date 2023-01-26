const db = require("../models")
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
        attributes: companyResource
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