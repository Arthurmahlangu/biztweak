const companyRepository = require("../repositories/company.repository")
const uploader = require("../helpers/uploader")

exports.createCompany = async (payload, files) => {
    const {
        name, 
        location, 
        registered, 
        registrationNumber, 
        registrationDate, 
        productsOrServices, 
        numberOfEmployees, 
        monthlyTurnover, 
        annualTurnover, 
        userId, 
        companyPhaseId, 
        companyIndustryId
    } = payload

    if (files) {
        if (files.logo) {
            const upload = await uploader(files.logo, "profiles", [
                "image/png", "image/jpg", "image/jpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.logo = upload.data
        }
    }

    const company = await companyRepository.createCompany({
        name, 
        logo: payload.logo, 
        location, 
        registered, 
        registrationNumber, 
        registrationDate, 
        productsOrServices, 
        numberOfEmployees, 
        monthlyTurnover, 
        annualTurnover, 
        userId, 
        companyPhaseId, 
        companyIndustryId
    })

    return company
}

exports.updateCompany = async (id, payload, files) => {
    const {
        name, 
        location, 
        registered, 
        registrationNumber, 
        registrationDate, 
        productsOrServices, 
        numberOfEmployees, 
        monthlyTurnover, 
        annualTurnover, 
        companyPhaseId, 
        companyIndustryId
    } = payload

    if (files) {
        if (files.logo) {
            const upload = await uploader(files.logo, "profiles", [
                "image/png", "image/jpg", "image/jpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.logo = upload.data
        }
    }

    const company = await companyRepository.updateCompany(id, {
        name, 
        logo: payload.logo, 
        location, 
        registered, 
        registrationNumber, 
        registrationDate, 
        productsOrServices, 
        numberOfEmployees, 
        monthlyTurnover, 
        annualTurnover, 
        companyPhaseId, 
        companyIndustryId
    })

    return company
}

exports.deleteCompany = async (id) => {
    const user = await companyRepository.deleteCompany(id)

    return user
}

exports.getCompanies = async () => {
    const user = await companyRepository.getCompanies()

    return user
}

exports.findCompany = async (id) => {
    const user = await companyRepository.findCompany(id)

    return user
}