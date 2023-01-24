const phaseRepository = require("../repositories/phase.repository")


exports.getPhases = async () => {
    const phase = await phaseRepository.getPhases()

    return phase
}