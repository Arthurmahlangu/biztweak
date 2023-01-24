const db = require("../models")
const industryResource = require("../resources/industry.resource")

exports.createIndustry = async (payload) => {
    const industry = await db.industry.create(payload)

    if (!industry) {
        throw new Error('Industry creation failed.')
    }

    return {
        data: null
    }
}

exports.updateIndustry = async (id, payload) => {
    const industry = await db.industry.update(payload, { where: { id } })

    if (!industry) {
        throw new Error('Industry update failed.')
    }

    return {
        data: null
    }
}

exports.deleteIndustry = async (id) => {
    const industry = await db.industry.destroy({ where: { id } })

    if (!industry) {
        throw new Error('Destroy industry failed.')
    }

    return {
        data: null
    }
}

exports.findIndustry = async (id) => {
    const industry = await db.industry.findOne({
        where: { id },
        attributes: industryResource
    })

    if (!industry) {
        throw new Error('Industry not found.')
    }

    return {
        data: industry
    }
}

exports.getIndustries = async () => {
    const industry = await db.industry.findAll({
        attributes: industryResource
    })

    return {
        data: industry
    }
}