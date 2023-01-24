const db = require("../models")
const phaseResource = require("../resources/phase.resource")

exports.createPhase = async (payload) => {
    const phase = await db.phase.create(payload)

    if (!phase) {
        throw new Error('Phase creation failed.')
    }

    return {
        data: null
    }
}

exports.updatePhase = async (id, payload) => {
    const phase = await db.phase.update(payload, { where: { id } })

    if (!phase) {
        throw new Error('Phase update failed.')
    }

    return {
        data: null
    }
}

exports.deletePhase = async (id) => {
    const phase = await db.phase.destroy({ where: { id } })

    if (!phase) {
        throw new Error('Destroy phase failed.')
    }

    return {
        data: null
    }
}

exports.findPhase = async (id) => {
    const phase = await db.phase.findOne({
        where: { id },
        attributes: phaseResource
    })

    if (!phase) {
        throw new Error('Phase not found.')
    }

    return {
        data: phase
    }
}

exports.getPhases = async () => {
    const phase = await db.phase.findAll({
        attributes: phaseResource
    })

    return {
        data: phase
    }
}