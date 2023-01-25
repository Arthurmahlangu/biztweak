const { Op } = require("sequelize")
const db = require("../models")
const forgotPasswordResource = require("../resources/forgot_password.resource")

exports.createForgotPassword = async (payload) => {
    const forgot_password = await db.forgot_password.create(payload)

    if (!forgot_password) {
        throw new Error('Forgot password creation failed.')
    }

    return {
        data: null
    }
}

exports.updateForgotPassword = async (id, payload) => {
    const forgot_password = await db.forgot_password.update(payload, { where: { id } })

    if (!forgot_password) {
        throw new Error('Forgot password update failed.')
    }

    return {
        data: null
    }
}

exports.deleteForgotPassword = async (id) => {
    const forgot_password = await db.forgot_password.destroy({ where: { id } })

    if (!forgot_password) {
        throw new Error('Destroy forgot password failed.')
    }

    return {
        data: null
    }
}

exports.findForgotPassword = async (id) => {
    const forgot_password = await db.forgot_password.findOne({
        where: { id },
        attributes: forgotPasswordResource
    })

    if (!forgot_password) {
        throw new Error('Forgot password not found.')
    }

    return {
        data: forgot_password
    }
}

exports.findForgotPasswordByURL = async (url) => {
    const forgot_password = await db.forgot_password.findOne({
        where: { url },
        attributes: forgotPasswordResource
    })

    if (!forgot_password) {
        throw new Error('Forgot password not found.')
    }

    return {
        data: forgot_password
    }
}

exports.findForgotPasswordNotExpired = async (email, expiryDate) => {
    const updated = false

    const forgot_password = await db.forgot_password.findOne({
        where: { 
            email,
            updated,
            expiryDate: {
                [Op.gt]: expiryDate
            }
         },
        attributes: forgotPasswordResource
    })

    return {
        data: forgot_password
    }
}

exports.getForgotPasswords = async () => {
    const forgot_password = await db.forgot_password.findAll({
        attributes: forgotPasswordResource
    })

    return {
        data: forgot_password
    }
}