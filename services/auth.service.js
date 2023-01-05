const TokenService = require("./token.service")
const bcrypt = require('bcrypt')
const db = require("../models")
const mailer = require("../helpers/mailer")
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

        return {
            error: false,
            data: {
                token: token.data.token,
                user: {
                    id: user.id,
                    fullname: user.fullname,
                    email: user.email,
                    phone: user.phone,
                    education: user.education,
                    work_experience: user.work_experience,
                    location: user.location,
                    role: user.role,
                    registered: user.createdAt
                }
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

        return {
            error: false,
            data: newUser
        }
        
    } catch (error) {
        errorLog.error(error.message)
        return {
            error: true,
            message: error.message
        }
    }
}