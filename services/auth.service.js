const userService = require("../services/user.service")
const userRepository = require("../repositories/user.repository")
const tokenRepository = require("../repositories/token.repository")
const forgotPasswordRepository = require("../repositories/forgot_password.repository")
const mailer = require("../helpers/mailer")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { 
    v4: uuidv4 
} = require('uuid');

exports.emailLogin = async (email, password) => {

    const { data } = await userRepository.findUserByEmail(email)

    const isPasswordValid = await bcrypt.compare(password, data.password)

    if (!isPasswordValid) {
        throw new Error('Wrong Email address or Password.')
    }

    const token = await jwt.sign({ id: data.id }, process.env.TOKEN_SECRET, {
        expiresIn: '7d'
    })

    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    await tokenRepository.createToken({
        userId: data.id,
        type: 'Access-Token',
        token,
        expiry
    })

    return {
        data: {
            token,
            user: {
                id: data.id,
                email: data.email,
                fullNames: data.fullNames,
                phone: data.phone,
                location: data.location,
                education: data.education,
                workExperience: data.workExperience,
                workExperience2: data.workExperience2,
                productUpdatesAndCommunityAnnouncements: data.productUpdatesAndCommunityAnnouncements,
                marketNewsletter: data.marketNewsletter,
                registrationDate: data.registrationDate
            }
        }
    }
}

exports.emailRegister = async (fullNames, email, password, role) => {

    const salt = await bcrypt.genSalt(10)

    const hashPassword = await bcrypt.hash(password, salt)
    
    const user = await userRepository.createUser({
        fullNames, 
        email, 
        password: hashPassword, 
        role
    })

    const mail = await mailer(email, 'Biztweak new registration', `
        <h1>New registration</h1>
        <p>Welcome to your new account.</p>
    `)

    if (mail.error) {
        throw new Error(mail.message)
    }

    return user
}

exports.requestForgotPassword = async (email) => {

    const updated = false

    const user = await userRepository.findUserByEmail(email)

    const expiryDate = new Date()

    const forgotPassword = await forgotPasswordRepository.findForgotPasswordNotExpired(user.data.email, expiryDate)

    if (!forgotPassword.data) {

        const random = uuidv4()
        
        expiryDate.setDate(expiryDate.getDate() + 1);

        url = `${process.env.UPLOAD_URL}forgot-password/${random}`

        await forgotPasswordRepository.createForgotPassword({
            email, url, updated, expiryDate
        })

    } else {
        url = forgotPassword.data.url
    }
    
    const mail = await mailer(email, 'Biztweak forgot password', `
        <h1>Forgot password request</h1>
        <p>Click the link to set a new password </p>
        <a href="${url}" style="padding: 5px 20px; background-color: #000; color: #FFF">${url}</a>
    `)

    if (mail.error) {
        throw new Error(mail.message)
    }

    return {
        data: null
    }
}

exports.updateForgotPassword = async (url, password) => {

    const { data } = await forgotPasswordRepository.findForgotPasswordByURL(url)

    const user = await userRepository.findUserByEmail(data.email)

    await userService.updatePassword(user.data.id, password)

    await forgotPasswordRepository.deleteForgotPassword(data.id)

    return {
        data: null
    }

}