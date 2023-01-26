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
        phaseId, 
        industryId
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
        phaseId, 
        industryId
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
        phaseId, 
        industryId
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
        phaseId, 
        industryId
    })

    return company
}

exports.deleteCompany = async (id) => {
    const company = await companyRepository.deleteCompany(id)

    return company
}

exports.getCompanies = async () => {
    const company = await companyRepository.getCompanies()

    return company
}

exports.findCompany = async (id) => {
    const company = await companyRepository.findCompany(id)

    return company
}


exports.getMyCompanies = async (id) => {
    const company = await companyRepository.getMyCompanies(id)

    return company
}