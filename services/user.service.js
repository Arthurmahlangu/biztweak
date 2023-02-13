const userRepository = require("../repositories/user.repository")
const uploader = require("../helpers/uploader")
const mailer = require("../helpers/mailer")
const bcrypt = require('bcrypt')

exports.createUser = async (fullNames, email, role) => {
    const password = ''

    const user = await userRepository.createUser({
        fullNames, email, role, password
    })

    const mail = await mailer(email, 'New registration', `
        <h1>New registration</h1>
        <p>Welcome to your new account. to set your password, use the link below</p>
    `)

    if (mail.error) {
        throw new Error(mail.message)
    }

    return user
}

exports.updateUserProfile = async (id, payload, files) => {

    const {
        fullNames, 
        phone, 
        education, 
        workExperience, 
        workExperience2,
        location,
        marketNewsletter,
        productUpdatesAndCommunityAnnouncements
    } = payload

    if (files) {
        if (files.photo) {
            const upload = await uploader(files.photo, "profiles", [
                "image/png", "image/jpg", "image/jpeg"
            ])

            if (upload.error) {
                throw new Error(upload.message)
            }

            payload.photo = upload.data
        }
    }

    const user = await userRepository.updateUser(id, {
        fullNames, 
        phone, 
        education, 
        workExperience, 
        workExperience2,
        location,
        photo: payload.photo,
        marketNewsletter,
        productUpdatesAndCommunityAnnouncements
    })

    return user
}

exports.updateEmail = async (id, email) => {
    const user = await userRepository.updateUser(id, {
        email
    })

    return user
}

exports.updatePassword = async (id, password) => {
    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(password, salt)

    const user = await userRepository.updateUser(id, {
        password: hashPassword
    })

    return user
}

exports.deleteUserAccount = async (id) => {
    const user = await userRepository.deleteUser(id)

    return user
}

exports.getUsers = async () => {
    const user = await userRepository.getUsers()

    return user
}
exports.getUsersByRole = async (role) => {
    const user = await userRepository.getUsersByRole(role)

    return user
}

exports.findUser = async (id) => {
    const user = await userRepository.findUser(id)

    return user
}