const db = require("../models")
const bcrypt = require("bcrypt");
const process = require('process');
const jwt = require("jsonwebtoken");
const userResource = require("../resources/user.resource");

const authService = {}

authService.register = async (fullnames, email, password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await db.user.findOne({ where: { email } })

        if (user) {
            return {
                error: true,
                message: 'Account exits.'
            }
        }

        const newUser = await db.user.create({
            fullnames, 
            email, 
            password: hash, 
            roles: "entrepreneur"
        })

        return {
            error: false,
            data: newUser
        }
    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

authService.adminRegister = async (fullnames, email, password) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await db.user.findOne({ where: { email } })

        if (user) {
            return {
                error: true,
                message: 'Account exits.'
            }
        }

        const newUser = await db.user.create({
            fullnames, 
            email, 
            password: hash, 
            roles: "administrator"
        })

        return {
            error: false,
            data: newUser
        }
    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

authService.emailAuth = async (email, password) => {
    try {

        const user = await db.user.findOne({ where: { email } })

        if (user) {
            const verify = await bcrypt.compare(password, user.password)

            if (verify) {
                const token = jwt.sign({ 
                    user: userResource(user) 
                }, process.env.JWT_SECRET, { expiresIn: "14m" })

                const refreshToken = jwt.sign({ 
                    user: userResource(user) 
                }, process.env.JWT_REFRESH_SECRET, { expiresIn: "30d" })

                const userToken = await db.token.findOne({ where: { userId: user.id }})

                if (userToken) {
                    await db.token.update({ 
                        token,
                        createdAt: new Date,
                        updatedAt: new Date
                    }, { where: { userId: user.id }})
                } else {
                    await db.token.create({ 
                        userId: user.id, 
                        token,
                        createdAt: new Date,
                        updatedAt: new Date
                    })
                }

                return {
                    error: false,
                    data: { token, refreshToken }
                }
            }
        }

        return {
            error: true,
            message: 'Wrong email address or password.'
        }
        
    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

module.exports = authService