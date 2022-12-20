const db = require("../models")

exports.createCompany = async (payload) => {
    try {
        const company = await db.company.findOne({ where: { name: payload.name } })

        if (company) {
            return {
                error: true,
                message: 'Company name already been taken.'
            }
        }
        
        const newCompany = await db.company.create(payload)

        if (!newCompany) {
            return {
                error: true,
                message: 'Company registration failed.'
            }
        }

        return {
            error: false,
            data: newCompany
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getCompanies = async () => {
    try {
        
        const companies = await db.company.findAll()

        return {
            error: false,
            data: companies
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.getCompany = async (id) => {
    try {

        const company = await db.company.findOne({ where: { id } })

        if (!company) {
            return {
                error: true,
                message: 'Company not found.'
            }
        }

        return {
            error: false,
            data: company
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.updateCompany = async (id, payload = {}) => {
    try {

        const company = await db.company.findOne({ where: { id } })

        if (!company) {
            return {
                error: true,
                message: 'Company not found.'
            }
        }

        const newCompany = await db.company.update(payload, { where: { id } })

        if (!newCompany) {
            return {
                error: true,
                message: 'Company update failed.'
            }
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.deleteCompany = async (id) => {
    try {

        const company = await db.company.findOne({ where: { id } })

        if (!company) {
            return {
                error: true,
                message: 'Company not found.'
            }
        }

        await db.company.destroy({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}