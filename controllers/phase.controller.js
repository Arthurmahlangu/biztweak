const { successResponse, failResponse } = require("../helpers/methods")
const phaseService = require("../services/phase.service")

const errorLog = require("simple-node-logger").createSimpleLogger({
    logFilePath: "./log/error/" + new Date().toLocaleDateString().split("/").join("-") + ".log",
    timestampFormat: "YYYY-MM-DD HH:mm:ss"
})
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getPhases = async (req, res) => {
    try {
    
        const { data } = await phaseService.getPhases()
    
        return res.send(
            successResponse("Success", {
                data
            })
        )

    } catch (error) {
        errorLog.error(error.message)
        return res.send(
            failResponse(error.message)
        )
    }
}