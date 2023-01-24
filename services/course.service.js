const courseRepository = require("../repositories/course.repository")
const courseVideoRepository = require("../repositories/course_video.repository")
const courseAudioRepository = require("../repositories/course_audio.repository")
const courseTextRepository = require("../repositories/course_text.repository")
const courseTestRepository = require("../repositories/course_test.repository")
const courseQuizRepository = require("../repositories/course_quiz.repository")
const courseDocumentRepository = require("../repositories/course_document.repository")
const uploader = require("../helpers/uploader")

exports.createCourse = async (payload, files) => {
    const {
        title, 
        description, 
        category, 
        timeOptions, 
        startDatetime, 
        expiryDatetime, 
        userId, 
        companyPhaseId
    } = payload

    if (files) {
        if (files.logo) {
            const upload = await uploader(files.logo, "courses", [
                "image/png", "image/jpg", "image/jpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.logo = upload.data
        }
        if (files.introVideo) {
            const upload = await uploader(files.introVideo, "courses", [
                "video/mp4", "video/mpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.introVideo = upload.data
        }
    }

    const course = await courseRepository.createCourse({
        title, 
        description, 
        category, 
        logo: payload.logo, 
        introVideo: payload.introVideo, 
        timeOptions, 
        startDatetime, 
        expiryDatetime, 
        userId, 
        companyPhaseId
    })

    return course
}

exports.updateCourse = async (id, payload, files) => {
    const {
        title, 
        description, 
        category, 
        timeOptions, 
        startDatetime, 
        expiryDatetime
    } = payload

    if (files) {
        if (files.logo) {
            const upload = await uploader(files.logo, "courses", [
                "image/png", "image/jpg", "image/jpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.logo = upload.data
        }
        if (files.introVideo) {
            const upload = await uploader(files.introVideo, "courses", [
                "video/mp4", "video/mpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.introVideo = upload.data
        }
    }

    const course = await courseRepository.updateCourse(id, {
        title, 
        description, 
        category, 
        logo: payload.logo, 
        introVideo: payload.introVideo, 
        timeOptions, 
        startDatetime, 
        expiryDatetime, 
    })

    return course
}

exports.deleteCourse = async (id) => {
    const course = await courseRepository.deleteCourse(id)

    return course
}

exports.getCourses = async () => {
    const course = await courseRepository.getCourses()

    return course
}

exports.findCourse = async (id) => {
    const course = await courseRepository.findCourse(id)

    return course
}

// Videos

exports.createCourseVideo = async (payload, files) => {
    const {
        name, 
        description, 
        companyId 
    } = payload

    if (files) {
        if (files.file) {
            const upload = await uploader(files.file, "courses", [
                "video/mp4", "video/mpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.file = upload.data
        }
    }

    const courseVideo = await courseVideoRepository.createCourseVideo({
        name,
        description,
        file: payload.file,
        companyId
    })

    return courseVideo
}

exports.updateCourseVideo = async (id, payload, files) => {
    const {
        name,
        description,
        companyId
    } = payload

    if (files) {
        if (files.file) {
            const upload = await uploader(files.file, "courses", [
                "video/mp4", "video/mpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.file = upload.data
        }
    }

    const courseVideo = await courseVideoRepository.updateCourseVideo(id, {
        name,
        description,
        file: payload.file,
        companyId
    })

    return courseVideo
}

exports.deleteCourseVideo = async (id) => {
    const courseVideo = await courseVideoRepository.deleteCourseVideo(id)

    return courseVideo
}

exports.getCourseVideos = async () => {
    const courseVideo = await courseVideoRepository.getCourseVideos()

    return courseVideo
}

exports.findCourseVideo = async (id) => {
    const courseVideo = await courseVideoRepository.findCourseVideo(id)

    return courseVideo
}

// Audio

exports.createCourseAudio = async (payload, files) => {
    const {
        name,
        description,
        companyId
    } = payload

    if (files) {
        if (files.file) {
            const upload = await uploader(files.file, "courses", [
                "audio/mpeg", "audio/wav"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.file = upload.data
        }
    }

    const courseAudio = await courseAudioRepository.createCourseAudio({
        name,
        description,
        file: payload.file,
        companyId
    })

    return courseAudio
}

exports.updateCourseAudio = async (id, payload, files) => {
    const {
        name,
        description,
        companyId
    } = payload

    if (files) {
        if (files.file) {
            const upload = await uploader(files.file, "courses", [
                "audio/mpeg", "audio/wav"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.file = upload.data
        }
    }

    const courseAudio = await courseAudioRepository.updateCourseAudio(id, {
        name,
        description,
        file: payload.file,
        companyId
    })

    return courseAudio
}

exports.deleteCourseAudio = async (id) => {
    const courseAudio = await courseAudioRepository.deleteCourseAudio(id)

    return courseAudio
}

exports.getCourseAudios = async () => {
    const courseAudio = await courseAudioRepository.getCourseAudios()

    return courseAudio
}

exports.findCourseAudio = async (id) => {
    const courseAudio = await courseAudioRepository.findCourseAudio(id)

    return courseAudio
}

// Text

exports.createCourseText = async (payload) => {
    const {
        title, 
        description, 
        companyId
    } = payload

    const courseText = await courseTextRepository.createCourseText({
        title, 
        description, 
        companyId
    })

    return courseText
}

exports.updateCourseText = async (id, payload) => {
    const {
        title, 
        description
    } = payload

    const courseText = await courseTextRepository.updateCourseText(id, {
        title, 
        description
    })

    return courseText
}

exports.deleteCourseText = async (id) => {
    const courseText = await courseTextRepository.deleteCourseText(id)

    return courseText
}

exports.getCourseTexts = async () => {
    const courseText = await courseTextRepository.getCourseTexts()

    return courseText
}

exports.findCourseText = async (id) => {
    const courseText = await courseTextRepository.findCourseText(id)

    return courseText
}

// Test

exports.createCourseTest = async (payload) => {
    const {
        question, 
        answers, 
        correctAnswer, 
        status, 
        companyId 
    } = payload

    const courseTest = await courseTestRepository.createCourseTest({
        question, 
        answers, 
        correctAnswer, 
        status, 
        companyId
    })

    return courseTest
}

exports.updateCourseTest = async (id, payload) => {
    const {
        question, 
        answers, 
        correctAnswer, 
        status 
    } = payload

    const courseTest = await courseTestRepository.updateCourseTest(id, {
        question, 
        answers, 
        correctAnswer, 
        status
    })

    return courseTest
}

exports.deleteCourseTest = async (id) => {
    const courseTest = await courseTestRepository.deleteCourseTest(id)

    return courseTest
}

exports.getCourseTests = async () => {
    const courseTest = await courseTestRepository.getCourseTests()

    return courseTest
}

exports.findCourseTest = async (id) => {
    const courseTest = await courseTestRepository.findCourseTest(id)

    return courseTest
}

// Quiz

exports.createCourseQuiz = async (payload) => {
    const {
        question, 
        answers, 
        correctAnswer, 
        status, 
        companyId 
    } = payload

    const courseQuiz = await courseQuizRepository.createCourseQuiz({
        question, 
        answers, 
        correctAnswer, 
        status, 
        companyId 
    })

    return courseQuiz
}

exports.updateCourseQuiz = async (id, payload) => {
    const {
        question, 
        answers, 
        correctAnswer, 
        status
    } = payload

    const courseQuiz = await courseQuizRepository.updateCourseQuiz(id, {
        question, 
        answers, 
        correctAnswer, 
        status
    })

    return courseQuiz
}

exports.deleteCourseQuiz = async (id) => {
    const courseQuiz = await courseQuizRepository.deleteCourseQuiz(id)

    return courseQuiz
}

exports.getCourseQuizzes = async () => {
    const courseQuiz = await courseQuizRepository.getCourseQuizzes()

    return courseQuiz
}

exports.findCourseQuiz = async (id) => {
    const courseQuiz = await courseQuizRepository.findCourseQuiz(id)

    return courseQuiz
}

// Document

exports.createCourseDocument = async (payload, files) => {
    const {
        name,
        description,
        companyId
    } = payload

    if (files) {
        if (files.file) {
            const upload = await uploader(files.file, "courses", [
                "application/pdf", 
                "application/msword", 
                "application/msword", 
                "text/plain", 
                "application/vnd.ms-excel", 
                "application/vnd.ms-excel", 
                "application/vnd.ms-excel",
                "application/vnd.ms-powerpoint",
                "application/vnd.ms-powerpoint",
                "application/vnd.ms-powerpoint",
                "application/vnd.ms-powerpoint"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.file = upload.data
        }
    }

    const courseDocument = await courseDocumentRepository.createCourseDocument({
        name,
        description,
        file: payload.file,
        companyId
    })

    return courseDocument
}

exports.updateCourseDocument = async (id, payload, files) => {
    const {
        name,
        description,
        companyId
    } = payload

    if (files) {
        if (files.file) {
            const upload = await uploader(files.file, "courses", [
                "application/pdf", 
                "application/msword", 
                "application/msword", 
                "text/plain", 
                "application/vnd.ms-excel", 
                "application/vnd.ms-excel", 
                "application/vnd.ms-excel",
                "application/vnd.ms-powerpoint",
                "application/vnd.ms-powerpoint",
                "application/vnd.ms-powerpoint",
                "application/vnd.ms-powerpoint"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.file = upload.data
        }
    }

    const courseDocument = await courseDocumentRepository.updateCourseDocument(id, {
        name,
        description,
        file: payload.file,
        companyId
    })

    return courseDocument
}

exports.deleteCourseDocument = async (id) => {
    const courseDocument = await courseDocumentRepository.deleteCourseDocument(id)

    return courseDocument
}

exports.getCourseDocuments = async () => {
    const courseDocument = await courseDocumentRepository.getCourseDocuments()

    return courseDocument
}

exports.findCourseDocument = async (id) => {
    const courseDocument = await courseDocumentRepository.findCourseDocument(id)

    return courseDocument
}