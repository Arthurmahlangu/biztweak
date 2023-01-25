const db = require("../models")
const incubatorResource = require("../resources/incubator.resource")

exports.createIncubator = async (payload) => {
    const incubator = await db.incubator.create(payload)

    if (!incubator) {
        throw new Error('Incubator creation failed.')
    }

    return {
        data: null
    }
}

exports.updateIncubator = async (id, payload) => {
    const incubator = await db.incubator.update(payload, { where: { id } })

    if (!incubator) {
        throw new Error('Incubator update failed.')
    }

    return {
        data: null
    }
}

exports.deleteIncubator = async (id) => {
    const incubator = await db.incubator.destroy({ where: { id } })

    if (!incubator) {
        throw new Error('Destroy incubator failed.')
    }

    return {
        data: null
    }
}

exports.findIncubator = async (id) => {
    const incubator = await db.incubator.findOne({
        where: { id },
        attributes: incubatorResource
    })

    if (!incubator) {
        throw new Error('Incubator not found.')
    }

    return {
        data: incubator
    }
}

exports.getIncubators = async () => {
    const incubator = await db.incubator.findAll({
        attributes: incubatorResource
    })

    return {
        data: incubator
    }
}