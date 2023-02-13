const db = require("../models")
const userResource = require("../resources/user.resource")

exports.createUser = async (payload) => {
    const user = await db.user.create(payload)

    if (!user) {
        throw new Error('User creation failed.')
    }

    return {
        data: null
    }
}

exports.updateUser = async (id, payload) => {
    const user = await db.user.update(payload, { where: { id } })

    if (!user) {
        throw new Error('User update failed.')
    }

    return {
        data: null
    }
}

exports.deleteUser = async (id) => {
    const user = await db.user.destroy({ where: { id } })

    if (!user) {
        throw new Error('Destroy user failed.')
    }

    return {
        data: null
    }
}

exports.findUser = async (id) => {
    const user = await db.user.findOne({
        where: { id },
        attributes: userResource
    })

    if (!user) {
        throw new Error('User not found.')
    }

    return {
        data: user
    }
}

exports.findUserByEmail = async (email) => {
    const user = await db.user.findOne({
        where: { email },
        attributes: [
            'id', 
            'fullNames',
            'email',
            'phone',
            'education',
            'workExperience',
            'workExperience2',
            'location',
            'password',
            'marketNewsletter',
            'productUpdatesAndCommunityAnnouncements',
            ['createdAt', 'registrationDate']
        ]
    })

    if (!user) {
        throw new Error('User not found.')
    }

    return {
        data: user
    }
}

exports.getUsers = async () => {
    const users = await db.user.findAll({
        attributes: userResource
    })

    users.count = users.length
    users.countROOT = users.filter((user) => user.role == "ROOT").length || 0
    users.countADMIN = users.filter((user) => user.role == "ADMIN").length || 0
    users.countINCUBATOR = users.filter((user) => user.role == "INCUBATOR").length || 0
    users.countENTREPRENEUR = users.filter((user) => user.role == "ENTREPRENEUR").length || 0

    return {
        data: users
    }
}

exports.getUsersByRole = async (role) => {
    const users = await db.user.findAll({
        where: { role },
        attributes: userResource
    })

    users.count = users.length

    return {
        data: users
    }
}