const companyRepository = require("../repositories/company.repository")
const assessmentRepository = require("../repositories/assessment.repository")
const assessmentQuestionRepository = require("../repositories/assessment_question.repository")

exports.createAssessment = async (payload) => {
    const {
        userId,
        companyId,
        questionsAndAnswers,
    } = payload
    
    const report = {}
    const fullReport = {}
    const percentages = {}
    const recommendedModules = {}
    const questionsResponses = []
    const recommendedTopics = {}
    
    const questionsAndAnswersArray = JSON.parse(questionsAndAnswers)

    if (!Array.isArray(questionsAndAnswersArray)) {
        throw new Error("The contruction of the questions and answers is incorrect.")
    }

    // List of all questions ID submittedby user
    const questionsById = []
    questionsAndAnswersArray.forEach(({ questionId }) => {
        questionsById.push(questionId)
    })

    // Get company
    const company = await companyRepository.findCompany(companyId)

    // Check allquestions are answered
    const questions = await assessmentQuestionRepository.getQuestionsByPhaseForSystem(company.data.phase.id)
    if (questions.data.length !== questionsAndAnswersArray.length) {
        // throw new Error("Some of the questions were not answered.")
    }

    questions.data.forEach(({ id, yesAnswer, noAnswer, category, modules, topics, type, recommendedJobOrSkills, phase_question }) => {
        const response = questionsAndAnswersArray.filter((questionAndAnswer) => questionAndAnswer.questionId === id)
        const questionsByCategory = questions.data.filter((question) => question.category === category)
        
        let n = 0
        questionsByCategory.forEach((question) => {
            const foundQuestion = questionsAndAnswersArray.filter((questionAndAnswer) => questionAndAnswer.questionId === question.id)
            if (foundQuestion[0]) {
                if (foundQuestion[0].answer.match(/yes/i)) {
                    n++
                }
            }
        })

        
        percentages[category] = Math.ceil((n / questionsByCategory.length) * 100)
        if (response[0]) {
            if (response[0].answer.match(/yes/i)) {

                questionsResponses.push({
                    questionId: id,
                    answer: "YES",
                    output: yesAnswer,
                    category: category,
                    priorityElement: phase_question.priorityElement,
                    recommendedJobOrSkills: "",
                    type
                })
            } else {
                questionsResponses.push({
                    questionId: id,
                    answer: "NO",
                    output: noAnswer,
                    category: category,
                    priorityElement: phase_question.priorityElement,
                    recommendedJobOrSkills,
                    type
                })

                if (modules) {
                    const foundModules = modules.split(",")
                    const foundTopics = topics.split(",")
                    foundModules.forEach((foundModule) => {
                        foundTopics.forEach((foundTopic) => {
                            if (recommendedModules[foundModule.trimStart()]) {
                                if (!recommendedModules[foundModule.trimStart()].includes(foundTopic.trimStart())) {
                                    recommendedModules[foundModule.trimStart()].push(foundTopic.trimStart())
                                }
                            } else {
                                recommendedModules[foundModule.trimStart()] = []
                                recommendedModules[foundModule.trimStart()].push(foundTopic.trimStart())
                            }
                        })
                    })
                }
            }
        } else {
            questionsResponses.push({
                questionId: id,
                answer: "NO",
                output: noAnswer,
                category: category,
                priorityElement: phase_question.priorityElement,
                recommendedJobOrSkills,
                type
            })

            if (modules) {
                const foundModules = modules.split(",")
                const foundTopics = topics.split(",")
                foundModules.forEach((foundModule) => {
                    foundTopics.forEach((foundTopic) => {
                        if (recommendedModules[foundModule.trimStart()]) {
                            if (!recommendedModules[foundModule.trimStart()].includes(foundTopic.trimStart())) {
                                recommendedModules[foundModule.trimStart()].push(foundTopic.trimStart())
                            }
                        } else {
                            recommendedModules[foundModule.trimStart()] = []
                            recommendedModules[foundModule.trimStart()].push(foundTopic.trimStart())
                        }
                    })
                })
            }
        }

        if (topics) {
            const foundTopics = topics.split(",")
            foundTopics.forEach((foundTopic) => {
                if (recommendedTopics[category]) {
                    if (!recommendedTopics[category].includes(foundTopic.trimStart())) {
                        recommendedTopics[category].push(foundTopic.trimStart())
                    }
                } else {
                    recommendedTopics[category] = []
                    recommendedTopics[category].push(foundTopic.trimStart())
                }
            })
        }
    })

    fullReport.isMajorGap = []
    fullReport.isBestPerforming = []
    fullReport.isPriorityElement = []

    for (const key in percentages) {
        if (percentages[key] > 49) {
            fullReport.isBestPerforming.push(key)
        } else {
            fullReport.isMajorGap.push(key)
        }
    }

    questionsResponses.forEach((question) => {
        if (question.priorityElement) {
            if (!fullReport.isPriorityElement.includes(question.category)) {
                fullReport.isPriorityElement.push(question.category)
            }
        }
    })

    report.percentages = percentages
    report.fullReport  = fullReport
    
    await assessmentRepository.createAssessment({
        userId,
        companyId,
        report: JSON.stringify(report),
        recommendedModules: JSON.stringify(recommendedModules),
        questionsAndAnswers: JSON.stringify(questionsResponses)
    })

    return {
        data: {
            report,
            recommendedModules,
            questionsResponses
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