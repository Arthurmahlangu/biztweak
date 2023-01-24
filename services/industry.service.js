const industryRepository = require("../repositories/industry.repository")


exports.getIndustries = async () => {
    const industry = await industryRepository.getIndustries()

    return industry
}