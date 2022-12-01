const db = require("../models")
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