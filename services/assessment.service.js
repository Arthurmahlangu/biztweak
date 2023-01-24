const assessmentRepository = require("../repositories/assessment.repository")
const assessmentQuestionRepository = require("../repositories/assessment_question.repository")

exports.createAssessment = async (payload) => {
    const {
        userId,
        companyId,
        questionsAndAnswers,
    } = payload

    const assessment = await assessmentRepository.createAssessment({
        userId,
        companyId,
        questionsAndAnswers,
        report,
        recommendedModules
    })

    return assessment
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
    const assessment = await companyRepository.deleteAssessment(id)

    return assessment
}

exports.getAssessments = async () => {
    const assessment = await companyRepository.getAssessments()

    return assessment
}

exports.findAssessment = async (id) => {
    const assessment = await companyRepository.findAssessment(id)

    return assessment
}

exports.getAssessmentQuestionsByPhase = async (id) => {
    const assessmentQuestion = await assessmentQuestionRepository.getQuestionsByPhase(id)

    return assessmentQuestion
}