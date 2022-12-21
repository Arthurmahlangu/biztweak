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

exports.createCompanyAssessments = async (payload) => {
    try {

        const company = await db.company.findOne({ where: { id: payload.companyid } })

        if (!company) {
            return {
                error: true,
                message: 'Company not found.'
            }
        }

        const answers = await db.assessment_answer.findOne({ 
            where: {
                userid: payload.userid,
                companyid: payload.companyid
            } 
        })

        if (answers) {
            return {
                error: true,
                message: 'Assessment question already answered.'
            }
        }

        const newAnswers = await db.assessment_answer.create(payload)

        if (!newAnswers) {
            return {
                error: true,
                message: 'Assessment not saved.'
            }
        }

        const yesAnswers = payload.answers.match(/yes/gi).length
        const questions = await db.assessment.count()
        const rating = Math.round((parseInt(yesAnswers) / parseInt(questions)) * 10)

        const newCompany = await db.company.update({ rating }, { where: { id: payload.companyid } })

        if (!newCompany) {
            return {
                error: true,
                message: 'Failed to update company rating.'
            }
        }

        return {
            error: false,
            data: { 
                "assessment": newAnswers,
                "rating": rating
            }
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}