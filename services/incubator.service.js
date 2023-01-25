const incubatorRepository = require("../repositories/incubator.repository")

exports.createIncubator = async (payload) => {
    const {
        userId,
        name,
        industry,
        location,
        type,
        sponsors,
        experience
    } = payload

    const incubator = await incubatorRepository.createIncubator({
        userId,
        name,
        industry,
        location,
        type,
        sponsors,
        experience
    })

    return incubator
}

exports.updateIncubator = async (id, payload) => {
    const {
        name,
        industry,
        location,
        type,
        sponsors,
        experience
    } = payload

    const incubator = await incubatorRepository.updateIncubator(id, {
        name,
        industry,
        location,
        type,
        sponsors,
        experience
    })

    return incubator
}


exports.deleteIncubator = async (id) => {
    const incubator = await incubatorRepository.deleteIncubator(id)

    return incubator
}

exports.getIncubators = async () => {
    const incubator = await incubatorRepository.getIncubators()

    return incubator
}

exports.findIncubator = async (id) => {
    const incubator = await incubatorRepository.findIncubator(id)

    return incubator
}