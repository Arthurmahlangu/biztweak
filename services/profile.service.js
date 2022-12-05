const db = require("../models")
const bcrypt = require("bcrypt");
const userResource = require("../resources/user.resource")

const profileService = {}

profileService.getProfile = async (id) => {
    try {
        id = id || 0

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        return {
            error: false,
            data: userResource(user)
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

profileService.getProfiles = async () => {
    try {
        let profiles = []

        const users = await db.user.findAll({ raw : true })

        if (users) {
            users.forEach((user) => {
                profiles.push(userResource(user))
            })
        }

        return {
            error: false,
            data: profiles
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

profileService.updateProfile = async (id, columns) => {
    try {
        id = id || 0

        if (columns.password) delete columns.password

        const user = await db.user.update(columns, { where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        return {
            error: false
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

profileService.updatePassword = async (id, password) => {
    try {

        const user = await db.user.findOne({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const verify = await bcrypt.compare(password, user.password)

        if (verify) {
            return {
                error: true,
                message: 'Old and new password can not be the same.'
            }
        }

        const userPassword = await db.user.update({ password: hash }, { where: { id } })

        if (!userPassword) {
            return {
                error: true,
                message: 'Password not updated.'
            }
        }

        return {
            error: false
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

profileService.deleteProfile = async (id) => {
    try {
        id = id || 0

        const user = await db.user.destroy({ where: { id } })

        if (!user) {
            return {
                error: true,
                message: 'Profile not found.'
            }
        }

        return {
            error: false
        }

    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'Technical error found.'
        }
    }
}

module.exports = profileService