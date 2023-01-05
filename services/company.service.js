const db = require("../models")
const UserResource = require("../resources/user.resource")
const CompanyResource = require("../resources/company.resource")
const AssessmentResource = require("../resources/assessment.resource")
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.createCompany = async (payload) => {
    try {
        const company = await db.company.findOne({ where: { name: payload.name } })

        if (company) {
            throw new Error('Company name already taken.')
        }
        
        const newCompany = await db.company.create(payload)

        if (!newCompany) {
            throw new Error('Company creation failed.')
        }

        return {
            error: false,
            data: newCompany
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getCompanies = async () => {
    try {
        
        const companies = await db.company.findAll({
            attributes: CompanyResource,
            include: [
                {
                    model: db.assessment_answer,
                    as: 'assessments',
                    attributes: AssessmentResource
                },
                {
                    model: db.user,
                    attributes: UserResource
                }  
            ]
        })

        return {
            error: false,
            data: companies
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.getCompany = async (id) => {
    try {

        const company = await db.company.findOne({ 
            where: { id },
            attributes: CompanyResource,
            include: [
                {
                    model: db.assessment_answer,
                    as: 'assessments',
                    attributes: AssessmentResource
                },
                {
                    model: db.user,
                    attributes: UserResource
                }
            ]
        })

        if (!company) {
            throw new Error('Company not found.')
        }

        return {
            error: false,
            data: company
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateCompany = async (id, payload = {}) => {
    try {

        const company = await db.company.findOne({ where: { id } })

        if (!company) {
            throw new Error('Company not found.')
        }

        const newCompany = await db.company.update(payload, { where: { id } })

        if (!newCompany) {
            throw new Error('UUpdate failed.')
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.deleteCompany = async (id) => {
    try {

        const company = await db.company.findOne({ where: { id } })

        if (!company) {
            throw new Error('Company not found.')
        }

        await db.company.destroy({ where: { id } })

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.createCompanyAssessments = async (payload) => {
    try {

        const company = await db.company.findOne({ where: { id: payload.companyid } })

        if (!company) {
            throw new Error('Company not found.')
        }

        const answers = await db.assessment_answer.findOne({ 
            where: {
                userid: payload.userid,
                companyid: payload.companyid
            } 
        })

        if (answers) {
            throw new Error('Assessment questions already answered.')
        }

        const newAnswers = await db.assessment_answer.create(payload)

        if (!newAnswers) {
            throw new Error('Company assessment failed.')
        }

        const questions = await db.assessment.count()
        const yesAnswers = payload.answers.match(/yes/gi).length
        const rating = Math.round((parseInt(yesAnswers) / parseInt(questions)) * 100)

        const newCompany = await db.company.update({ rating }, { where: { id: payload.companyid } })

        if (!newCompany) {
            throw new Error('Company rating failed.')
        }

        return {
            error: false,
            data: { 
                "assessment": newAnswers,
                "rating": rating
            }
        }

    } catch (error) {
        errorLog.error(error.message)
        console.log(error)
        return {
            error: true,
            message: error.message
        }
    }
}


exports.getCompanyAssessments = async (companyid, assessmentid) => {
    try {

        const company = await db.company.findOne({ where: { id: companyid } })

        if (!company) {
            throw new Error('Company not found.')
        }

        const answers = await db.assessment_answer.findOne({ where: { id: assessmentid } })

        if (!answers) {
            throw new Error('Company assessment not found.')
        }

        return {
            error: false,
            data: answers
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.updateCompanyAssessments = async (companyid, assessmentid, payload = {}) => {
    try {

        const company = await db.company.findOne({ where: { id: companyid } })

        if (!company) {
            throw new Error('company not found.')
        }

        const newAnswers = await db.assessment_answer.update(payload, { where: { id: assessmentid } })

        if (!newAnswers) {
            throw new Error('Update failed.')
        }

        const questions = await db.assessment.count()
        const yesAnswers = payload.answers.match(/yes/gi).length
        const rating = Math.round((parseInt(yesAnswers) / parseInt(questions)) * 10)

        const newCompany = await db.company.update({ rating }, { where: { id: companyid } })

        if (!newCompany) {
            throw new Error('Company rating failed.')
        }

        return {
            error: false,
            data: []
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}


exports.getMyCompanies = async (userid) => {
    try {
        
        const companies = await db.company.findAll({
            where: { userid }
        }, {
            attributes: CompanyResource,
            include: [
                {
                    model: db.assessment_answer,
                    as: 'assessments',
                    attributes: AssessmentResource
                },
                {
                    model: db.user,
                    attributes: UserResource
                }  
            ]
        })

        return {
            error: false,
            data: companies
        }

    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}