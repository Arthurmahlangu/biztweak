const assessmentRepository = require("../repositories/assessment.repository")
const assessmentQuestionRepository = require("../repositories/assessment_question.repository")

exports.createAssessment = async (payload) => {
    const {
        userId,
        companyId,
        questionsAndAnswers,
    } = payload
    
    const questionsAndAnswersArray = JSON.parse(questionsAndAnswers)

    if (!Array.isArray(questionsAndAnswersArray)) {
        throw new Error("The contruction of the questions and answers is incorrect.")
    }

    let report = []
    let responses = []
    let questionsId = []
    let answerResponse = []
    let recommendedModules = []
    
    questionsAndAnswersArray.forEach(({ questionId, answer }) => {
        questionsId.push(questionId)
        answerResponse.push(answer)
    })

    const allassessmentQuestions = await assessmentQuestionRepository.getQuestionsAllInfo()
    const assessmentQuestion = await assessmentQuestionRepository.findQuestionWithPhaseInfo(questionsId)

    let n = 0
    assessmentQuestion.data.forEach(({ question, phase, category, module, yesAnswer, noAnswer, type }) => {
        const answer = answerResponse[n]

        if (answer.match(/yes/i)) {
            responses.push({
                phaseId: phase.id, 
                category, 
                module, 
                question,
                answer,
                type,
                recommendation: yesAnswer
            })
        } else {
            responses.push({
                phaseId: phase.id, 
                category, 
                module, 
                question,
                answer,
                type,
                recommendation: noAnswer
            })
        }

        n++
    })

    const questionsFound = []
    allassessmentQuestions.data.forEach((q) => {
        if (responses[0].phaseId === q.phaseId) {
            questionsFound.push(q)
        }
    })

    const uniqueCategories = []
    questionsFound.forEach(({ category }) => {
        if (!uniqueCategories.includes(category)) {
            uniqueCategories.push(category)
        }
    })

    uniqueCategories.forEach((uniqueCategory) => {
        let modules = []
        let recommendations = []

        const categoriesFound = []
        questionsFound.forEach((q) => {
            if (uniqueCategory === q.category) {
                categoriesFound.push(q.category)
            }
        })

        let count = 0
        responses.forEach(({ question, category, answer, module, recommendation, type }) => {
            if (category == uniqueCategory) {
                if (answer.match(/yes/i) ) {
                    count++
                    modules.push(module)
                    recommendations.push({
                        question,
                        recommendation,
                        type
                    })
                    if (!recommendedModules.includes(module)) {
                        recommendedModules.push(module)
                    }
                } else {
                    recommendations.push({
                        question,
                        recommendation,
                        type
                    })
                }
            }
        })

        const percentage = ((count / categoriesFound.length) * 100)

        report.push({
            category: uniqueCategory,
            percentage,
            modules,
            recommendations
        })
    })


    await assessmentRepository.createAssessment({
        userId,
        companyId,
        questionsAndAnswers,
        report: JSON.stringify(report),
        recommendedModules: JSON.stringify(recommendedModules)
    })

    return {
        data: {
            report,
            recommendedModules
        }
    }
}

exports.updateAssessment = async (id, payload) => {
    const {
        questionsAndAnswers,
    } = payload

    const assessment = await assessmentRepository.updateAssessment(id, {
        questionsAndAnswers,
        report,
        recommendedModules
    })

    return assessment
}

exports.deleteAssessment = async (id) => {
    const assessment = await assessmentRepository.deleteAssessment(id)

    return assessment
}

exports.getAssessments = async () => {
    const assessment = await assessmentRepository.getAssessments()

    return assessment
}

exports.findAssessment = async (id) => {
    const assessment = await assessmentRepository.findAssessment(id)

    return assessment
}

exports.getAssessmentQuestionsByPhase = async (id) => {
    const assessmentQuestion = await assessmentQuestionRepository.getQuestionsByPhase(id)

    return assessmentQuestion
}