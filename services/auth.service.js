const TokenService = require("./token.service")
const bcrypt = require('bcrypt')
const db = require("../models")
const { UserResource } = require("../resources/user.resource")

exports.emailAuth = async (email, password) => {
    try {

        const user = await db.user.findOne({ where: { email } })

        if (!user) {
            return {
                error: true,
                message: 'Wrong email address or password.'
            }
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            return {
                error: true,
                message: 'Wrong email address or password.'
            }
        }

        const token = await TokenService.createToken(user.id)

        if (!token) {
            return {
                error: true,
                message: token.message
            }
        }

        return {
            error: false,
            data: {
                token: token.data.token,
                user: UserResource(user)
            }
        }
        
    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}

exports.emailRegister = async (fullname, email, password) => {
    try {

        const isUser = await db.user.findOne({ where: { email } })

        if (isUser) {
            return {
                error: true,
                message: 'Account already exists.'
            }
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = await db.user.create({
            fullname, email, password: hashPassword
        })

        if (!newUser) {
            return {
                error: true,
                message: 'Registration failed.'
            }
        }

        return {
            error: false,
            data: newUser
        }
        
    } catch (error) {
        return {
            error: true,
            message: 'Technical error.'
        }
    }
}