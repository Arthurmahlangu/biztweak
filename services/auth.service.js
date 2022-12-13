const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const db = require("../models")

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

        const token = await jwt.sign({
            id: user.id,
            email: user.email,
            fullname: user.fullname
        }, process.env.TOKEN_SECRET)

        return {
            error: false,
            data: token
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