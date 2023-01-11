const db = require("../models")
const UserResource = require("../resources/user.resource")
const ReportResource = require("../resources/report.resource")
const CompanyResource = require("../resources/company.resource")
const AssessmentResource = require("../resources/assessment.resource")
const CourseResource = require("../resources/course.resource")
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
            data: this.getCompany(newCompany.id)
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
                    model: db.user,
                    attributes: UserResource
                },
                {
                    model: db.report,
                    attributes: ReportResource
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
                },
                {
                    model: db.report,
                    attributes: ReportResource
                },
                {
                    model: db.course,
                    attributes: CourseResource
                }
            ]
        })

        if (!company) {
            throw new Error('Company not found.')
        }

        if (company.assessments) {
            company.assessments.answers = JSON.parse(company.assessments.answers)
        }

        if (company.report) {
            company.report.scores = JSON.parse(company.report.scores)
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
            throw new Error('Assessment answers not saved.')
        }

        const questionsCount = await db.assessment.count()
        const yesAnswers = payload.answers.match(/yes/gi).length
        const rating = Math.round((parseInt(yesAnswers) / parseInt(questionsCount)) * 100)

        const results = []
        const categories = []
        const computedResults = []
        const payloadAnswers = JSON.parse(payload.answers)
        const questions = await db.assessment.findAll()

        questions.forEach((question) => {
            if (categories[question.category]) {
                categories[question.category] += 1
            } else {
                categories[question.category] = 1
            }
            if (result = payloadAnswers.find((answer) => answer.id == question.id)) {
                if (result.answer.match(/yes/gi)) {
                    if (results[question.category]) {
                        results[question.category] += 1
                    } else {
                        results[question.category] = 1
                    }
                }
            }
        })

        for (var category in categories) {
            const total = categories[category]
            if (results[category]) {
                const percentage = Math.round((results[category] / total) * 100)
                computedResults.push({
                    category,
                    percentage
                }) 
            } else {
                const percentage = 0
                computedResults.push({
                    category,
                    percentage
                }) 
            }
        }
        
        const newCompany = await db.company.update({ rating }, { where: { id: payload.companyid } })

        if (!newCompany) {
            throw new Error('Company rating failed.')
        }

        const newReport = await db.report.create({
            companyid: company.id,
            scores: JSON.stringify(computedResults)
        })


        if (!newReport) {
            throw new Error('Assessment report failed.')
        }

        let categoryList = []
        let recomendedCourses = []
        let recomendedCoursIDs = []

        computedResults.forEach((result) => {
            categoryList.push(result.category)
        })

        const courses = await db.course.findAll({
            where: {
                category: categoryList
            }
        })

        courses.forEach((course) => {
            computedResults.forEach((result) => {
                if (result.category == course.category) {
                    if (result.percentage <= course.score) {
                        if (!recomendedCoursIDs.includes(course.id)) {
                            recomendedCoursIDs.push(course.id)
                            recomendedCourses.push({
                                courseid: course.id,
                                companyid: company.id
                            })
                            return
                        }
                    }
                }
            })
        })

        if (recomendedCourses.length > 0) {
            await db.recomended_course.bulkCreate(recomendedCourses)
        }

        const data = await this.getCompany(company.id)

        return {
            error: false,
            data
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

        const answers = await db.assessment_answer.findOne({ 
            where: { id: assessmentid },
            attributes: AssessmentResource 
        })

        if (!answers) {
            throw new Error('Company assessment not found.')
        }

        if (answers.answers) {
            answers.answers = JSON.parse(answers.answers)
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
            where: { userid },
            attributes: CompanyResource,
            include: [
                {
                    model: db.assessment_answer,
                    as: 'assessments',
                    attributes: AssessmentResource
                },
                {
                    model: db.report,
                    attributes: ReportResource
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