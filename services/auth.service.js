const TokenService = require("./token.service")
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt')
const db = require("../models")
const mailer = require("../helpers/mailer")
const { getUser, updatePassword } = require("./user.service");
const { Op } = require("sequelize");
const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})

exports.emailAuth = async (email, password) => {
    try {

        const user = await db.user.findOne({ where: { email } })

        if (!user) {
            throw new Error('Wrong Email address or Password.')
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            throw new Error('Wrong Email address or Password.')
        }

        const token = await TokenService.createToken(user.id)

        if (!token) {
            throw new Error(token.message)
        }

        const service = await getUser(user.id)

        if (service.error) {
            throw new Error(service.message)
        }

        return {
            error: false,
            data: {
                token: token.data.token,
                user: service.data
            }
        }
        
    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.emailRegister = async (fullname, email, password) => {
    try {

        const isUser = await db.user.findOne({ where: { email } })

        if (isUser) {
            throw new Error('Account exists. Try logging in.')
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await db.user.create({
            fullname, email, password: hashPassword, role: "ENTREPRENEUR"
        })

        if (!newUser) {
            throw new Error('Registration failed.')
        }

        const emailRes = await mailer(email, "Biztweak Registration", "Biztweak account registered.")

        if (emailRes.error) {
            throw new Error('Registration email failed.')
        }

        const service = await getUser(newUser.id)

        if (service.error) {
            throw new Error(service.message)
        }

        return {
            error: false,
            data: service.data
        }
        
    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}

exports.forgotPassword = async (email) => {
    try {

        let url = null

        const now = new Date()

        const isUser = await db.user.findOne({ where: { email } })

        if (!isUser) {
            throw new Error('User not found.')
        }

        const forgotPassword = await db.forgot_password.findOne({
            where: {
                email,
                updated: false,
                expiry_date: {
                    [Op.lt]: now
                }
            }
        })

        if (forgotPassword) {

            url = forgotPassword.url

        } else {

            const random = uuidv4()
            const updated = false
            const expiry_date = new Date();

            expiry_date.setDate(expiry_date.getDate() + 1);

            url = `${process.env.UPLOAD_URL}forgot-password/${random}`
    
            const newForgotPassword = await db.forgot_password.create({
                email,
                url,
                updated,
                expiry_date
            })

            if (!newForgotPassword) {
                throw new Error('Forgot password request failed.')
            }
        }
    
        const body = `Click the link to set a new password ${url}`
        
        const emailRes = await mailer(email, "Biztweak forgot password", body)

        if (emailRes.error) {
            throw new Error('Forgot password email failed.')
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

exports.updateForgotPassword = async (url, password) => {
    try {

        const forgotPassword = await db.forgot_password.findOne({
            where: {
                url,
                updated: false,
                expiry_date: {
                    [Op.lt]: now
                }
            }
        })

        if (!forgotPassword) {
            throw new Error('Forgot password URL no longer valid.')
        }

        const isUser = await db.user.findOne({ where: { email: forgotPassword.email } })

        if (!isUser) {
            throw new Error('User not found.')
        }
        
        const service = await updatePassword(isUser.id, password)
        
        if (service.error) {
            throw new Error(service.message)
        }

        await db.forgot_password.destroy({ where: { id: forgotPassword.id } })

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